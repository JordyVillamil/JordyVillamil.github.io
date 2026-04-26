// Vite plugin that handles /api/* routes locally during development.
// In production these are handled by Vercel Edge Functions.

import type { Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (c: Buffer) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
    req.on("error", reject);
  });
}

async function handleChat(req: IncomingMessage, res: ServerResponse) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "sk-PASTE_YOUR_KEY_HERE") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("OPENAI_API_KEY not configured in .env");
    return;
  }

  const body = JSON.parse(await readBody(req));
  const { systemPrompt, messages } = body;

  if (!systemPrompt || !Array.isArray(messages)) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad request: systemPrompt and messages required");
    return;
  }

  const trimmedMessages = messages.slice(-20);

  const openaiRes = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 300,
        temperature: 0.7,
        messages: [
          { role: "system", content: systemPrompt },
          ...trimmedMessages,
        ],
      }),
    }
  );

  if (!openaiRes.ok) {
    const err = await openaiRes.text();
    res.writeHead(openaiRes.status, { "Content-Type": "text/plain" });
    res.end(err);
    return;
  }

  const data = await openaiRes.json();
  const reply = (data as any).choices?.[0]?.message?.content ?? "";

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ reply }));
}

async function handleTTS(req: IncomingMessage, res: ServerResponse) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "sk-PASTE_YOUR_KEY_HERE") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("OPENAI_API_KEY not configured in .env");
    return;
  }

  const body = JSON.parse(await readBody(req));
  const { text } = body;

  if (!text || typeof text !== "string") {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Bad request: text is required");
    return;
  }

  const trimmedText = text.slice(0, 1000);

  const openaiRes = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "tts-1",
      input: trimmedText,
      voice: "onyx",
      response_format: "mp3",
    }),
  });

  if (!openaiRes.ok) {
    const err = await openaiRes.text();
    res.writeHead(openaiRes.status, { "Content-Type": "text/plain" });
    res.end(err);
    return;
  }

  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Cache-Control": "no-cache",
  });

  const reader = openaiRes.body?.getReader();
  if (!reader) {
    res.end();
    return;
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
}

export default function apiProxy(): Plugin {
  return {
    name: "vite-plugin-api-proxy",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ?? "";

        if (req.method !== "POST") {
          next();
          return;
        }

        try {
          if (url === "/api/chat") {
            await handleChat(req, res);
          } else if (url === "/api/tts") {
            await handleTTS(req, res);
          } else {
            next();
          }
        } catch (error) {
          console.error("API proxy error:", error);
          if (!res.headersSent) {
            res.writeHead(500, { "Content-Type": "text/plain" });
          }
          res.end("Internal server error");
        }
      });
    },
  };
}
