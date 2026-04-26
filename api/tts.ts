// Vercel Serverless Function: POST /api/tts
// Proxies TTS requests to OpenAI and streams back the audio.

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
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return new Response("Bad request: text is required", { status: 400 });
    }

    // Limitar longitud del texto para evitar abusos
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
      return new Response(err, { status: openaiRes.status });
    }

    // Stream the audio directly to the client
    return new Response(openaiRes.body, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("TTS API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
