import {
  useState,
  useRef,
  useCallback,
  type FC,
  type FormEvent,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import AvatarModel from "./AvatarModel";
import { useAudioAnalyzer } from "../../hooks/useAudioAnalyzer";
import { sendChatMessage, fetchTTSAudio } from "../../services/aiService";
import BorderGlow from "../UI/BorderGlow";
import "../../styles/AvatarWidget.css";

// ─── System Prompt (cerebro del avatar) ──────────────────────────────
export const SYSTEM_PROMPT = `Eres el avatar digital de Jordy Fabián Villamil Letrado, un tecnólogo en análisis y desarrollo de software de Colombia, bilingüe (Español/Inglés).

TONO: Profesional, tecnológico, amable. Responde de forma concisa y clara.

STACK TECNOLÓGICO:
- Frontend: React, TypeScript, Tailwind CSS.
- Backend: Python, Django, FastAPI, Laravel.
- DevOps: Docker, CI/CD.
- Seguridad: Conocimientos en Ciberseguridad.
- En formación: C# y .NET (aún sin experiencia profesional con ellos; acláralo si preguntan).

PROYECTOS CLAVE:
1. EduGestion360: Plataforma educativa construida con arquitectura en capas (Python, Django, React).
2. Finan Core: Software contable/administrativo utilizando arquitectura Hexagonal (Laravel, React).
3. Synapse Trade: Agente IA financiero nativo para análisis de mercado (Python, FastAPI, Docker).

SOFT SKILLS:
- Experiencia previa en hospitalidad (mesero en Bar Area 53), lo que garantiza excelente trato al cliente, trabajo en equipo y comunicación asertiva bajo presión.

OBJETIVO:
Convencer a reclutadores de que la combinación de habilidades en desarrollo Full-Stack, arquitectura de software (Hexagonal/Capas) y entusiasmo por agentes IA (MCP) hacen de Jordy el candidato ideal. Destaca siempre el valor diferencial: perfil técnico sólido + habilidades blandas excepcionales.

REGLAS:
- Si te preguntan algo que no está en este contexto, responde que no tienes esa información pero invita a contactar a Jordy.
- No inventes datos. Solo responde con lo que sabes de este contexto.
- Responde en el mismo idioma en que te pregunten.`;

// ─── Tipos ────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── Componente principal ─────────────────────────────────────────────
const AvatarWidget: FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume, connectAudio, disconnectAudio } = useAudioAnalyzer();

  // ─── Scroll al último mensaje ────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // ─── Enviar mensaje ──────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Llamar al backend proxy → OpenAI Chat
      const reply = await sendChatMessage(updatedMessages);

      const assistantMessage: Message = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, assistantMessage]);

      // Generar audio TTS y reproducirlo (lip-sync automático)
      try {
        const audioUrl = await fetchTTSAudio(reply);
        playAudio(audioUrl);
      } catch (ttsErr) {
        console.warn("TTS no disponible, solo texto:", ttsErr);
      }
    } catch (err) {
      console.error("Error al comunicarse con el LLM:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, ocurrió un error. Intenta de nuevo.",
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(scrollToBottom, 100);
    }
  };

  // ─── Reproducir audio TTS y conectar al analizador ──────────────
  const playAudio = useCallback(
    (url: string) => {
      // Detener audio anterior
      if (audioRef.current) {
        audioRef.current.pause();
        disconnectAudio();
      }

      const audio = new Audio(url);
      audioRef.current = audio;
      connectAudio(audio);

      audio.addEventListener("ended", () => {
        disconnectAudio();
        URL.revokeObjectURL(url);
      });

      void audio.play();
    },
    [connectAudio, disconnectAudio]
  );

  return (
    <>
      {/* ─── Botón flotante ──────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="avatar-widget-toggle"
        aria-label={open ? "Cerrar asistente" : "Abrir asistente"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* ─── Panel del widget ────────────────────────────────────── */}
      {open && (
        <div className="avatar-widget-anchor">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="260 80 70"
            backgroundColor="#060010"
            borderRadius={20}
            glowRadius={30}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={["#c084fc", "#f472b6", "#38bdf8"]}
          >
            <div className="avatar-widget-panel">
              {/* Header */}
              <div className="avatar-widget-header">
                <h3>Avatar IA — Jordy Villamil</h3>
                <p>Pregúntame sobre mi experiencia y proyectos</p>
              </div>

          {/* Canvas 3D */}
          <div className="avatar-widget-canvas">
            <Canvas
              camera={{ position: [0, 1.5, 2.5], fov: 35 }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[2, 3, 4]} intensity={1} />
              <AvatarModel volume={volume} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
                target={[0, 1.4, 0]}
              />
              <Environment preset="city" />
            </Canvas>
          </div>

          {/* Chat messages */}
          <div className="avatar-widget-messages">
            {messages.length === 0 && (
              <p className="avatar-widget-empty">
                ¡Hola! Soy el avatar de Jordy. Pregúntame lo que quieras.
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`avatar-msg ${
                  msg.role === "user"
                    ? "avatar-msg--user"
                    : "avatar-msg--assistant"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="avatar-msg avatar-msg--loading">
                Pensando...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="avatar-widget-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="avatar-widget-input"
            />
            <button
              type="submit"
              disabled={loading}
              className="avatar-widget-send"
            >
              Enviar
            </button>
          </form>
            </div>
          </BorderGlow>
        </div>
      )}
    </>
  );
};

export default AvatarWidget;
