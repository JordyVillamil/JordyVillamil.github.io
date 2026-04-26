// Vercel Serverless Function: POST /api/chat
// Proxies chat requests to OpenAI so the API key stays server-side.

export const config = { runtime: "edge" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response("OPENAI_API_KEY not configured", { status: 500 });
  }

  try {
    const { systemPrompt, messages } = await req.json();

    if (!systemPrompt || !Array.isArray(messages)) {
      return new Response("Bad request: systemPrompt and messages required", {
        status: 400,
      });
    }

    // Limitar historial para evitar abusos de tokens
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
      return new Response(err, { status: openaiRes.status });
    }

    const data = await openaiRes.json();
    const reply = data.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
