import { useRef, useEffect, useCallback } from "react";

interface UseAudioAnalyzerReturn {
  /** Ref con el volumen normalizado (0–1). Léelo dentro de useFrame. */
  volume: React.MutableRefObject<number>;
  /** Conecta un HTMLAudioElement al analizador. */
  connectAudio: (element: HTMLAudioElement) => void;
  /** Desconecta y resetea el volumen a 0. */
  disconnectAudio: () => void;
}

/**
 * Hook que usa la Web Audio API (AnalyserNode) para extraer el volumen
 * en tiempo real de un HTMLAudioElement.
 *
 * El valor se expone como un `ref` para evitar re-renders por frame;
 * el componente 3D lo consume dentro de `useFrame`.
 *
 * @param fftSize  Tamaño de la FFT (potencia de 2). Menor = más rápido, menos detalle.
 * @param smoothing  smoothingTimeConstant del AnalyserNode (0–1). Suaviza los cambios.
 */
export function useAudioAnalyzer(
  fftSize: number = 256,
  smoothing: number = 0.8
): UseAudioAnalyzerReturn {
  const volume = useRef<number>(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const rafRef = useRef<number>(0);

  // ─── Loop de análisis ───────────────────────────────────────────────
  const tick = useCallback(() => {
    const analyser = analyserRef.current;
    const data = dataArrayRef.current;

    if (!analyser || !data) {
      volume.current = 0;
      return;
    }

    analyser.getByteFrequencyData(data);

    // Promedio normalizado a rango 0–1
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    volume.current = sum / (data.length * 255);

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  // ─── Conectar un <audio> al grafo ──────────────────────────────────
  const connectAudio = useCallback(
    (element: HTMLAudioElement) => {
      // Crear AudioContext una sola vez
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;

      // Si el contexto está suspendido (política de autoplay), reanudarlo
      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      // Evitar conectar el mismo elemento dos veces
      if (sourceRef.current) return;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = fftSize;
      analyser.smoothingTimeConstant = smoothing;
      analyserRef.current = analyser;

      dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

      const source = ctx.createMediaElementSource(element);
      source.connect(analyser);
      analyser.connect(ctx.destination); // para que se siga escuchando
      sourceRef.current = source;

      // Arrancar loop
      rafRef.current = requestAnimationFrame(tick);
    },
    [fftSize, smoothing, tick]
  );

  // ─── Desconectar ───────────────────────────────────────────────────
  const disconnectAudio = useCallback(() => {
    cancelAnimationFrame(rafRef.current);

    sourceRef.current?.disconnect();
    analyserRef.current?.disconnect();

    sourceRef.current = null;
    analyserRef.current = null;
    dataArrayRef.current = null;
    volume.current = 0;
  }, []);

  // ─── Cleanup al desmontar ──────────────────────────────────────────
  useEffect(() => {
    return () => {
      disconnectAudio();
      void audioCtxRef.current?.close();
      audioCtxRef.current = null;
    };
  }, [disconnectAudio]);

  return { volume, connectAudio, disconnectAudio };
}
