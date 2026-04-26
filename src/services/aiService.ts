import { SYSTEM_PROMPT } from "../components/AI/AvatarWidget";

// ─── Tipos ────────────────────────────────────────────────────────────
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  reply: string;
}

interface TTSResponse {
  audioUrl: string;
}

// ─── Base URL del backend ─────────────────────────────────────────────
// En desarrollo Vite corre en :5173 y el proxy de Vercel en :3000.
// En producción ambas rutas comparten dominio.
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

// ─── Chat completions a través del proxy ──────────────────────────────
export async function sendChatMessage(
  history: ChatMessage[]
): Promise<string> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemPrompt: SYSTEM_PROMPT,
      messages: history,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Chat API error ${res.status}: ${text}`);
  }

  const data: ChatResponse = await res.json();
  return data.reply;
}

// ─── TTS a través del proxy ───────────────────────────────────────────
export async function fetchTTSAudio(text: string): Promise<string> {
  const res = await fetch(`${API_BASE}/api/tts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`TTS API error ${res.status}: ${msg}`);
  }

  // Si el backend devuelve audio binario directamente
  const contentType = res.headers.get("content-type") ?? "";
  if (contentType.startsWith("audio/")) {
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  // Si devuelve JSON con URL
  const data: TTSResponse = await res.json();
  return data.audioUrl;
}
