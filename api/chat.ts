// Vercel Serverless Function: POST /api/chat
export const config = { runtime: "edge" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = process.env.CEREBRAS_API_KEY; // 👈 1. Cambiar variable
  if (!apiKey) {
    return new Response("CEREBRAS_API_KEY not configured", { status: 500 });
  }

  try {
    const { systemPrompt, messages } = await req.json();

    if (!systemPrompt || !Array.isArray(messages)) {
      return new Response("Bad request: systemPrompt and messages required", {
        status: 400,
      });
    }

    const trimmedMessages = messages.slice(-20);

    const cerebrasRes = await fetch(
      "https://api.cerebras.ai/v1/chat/completions", // 👈 2. Cambiar URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama3.1-8b",           // 👈 sin guion
          max_completion_tokens: 300,     // 👈 parámetro nativo de Cerebras
          temperature: 0.7,
          messages: [
            { role: "system", content: systemPrompt },
            ...trimmedMessages,
          ],
        }),
      }
    );

    if (!cerebrasRes.ok) {
      const err = await cerebrasRes.text();
      return new Response(err, { status: cerebrasRes.status });
    }

    const data = await cerebrasRes.json();
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