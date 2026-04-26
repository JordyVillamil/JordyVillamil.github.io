import { useRef, useEffect, useMemo, type FC } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

// ─── Paths públicos ──────────────────────────────────────────────────
const MODEL_PATH = "/avatar_tpose.glb";
const IDLE_PATH = "/animacion_idle.glb";

// ─── Rango de rotación del jaw (radianes) ────────────────────────────
const JAW_MIN = 0; // cerrada
const JAW_MAX = 0.35; // máxima apertura (~20°)

interface AvatarModelProps {
  /** Ref con el volumen normalizado 0-1, actualizado por useAudioAnalyzer. */
  volume: React.MutableRefObject<number>;
}

/**
 * Componente R3F que:
 * 1. Carga el modelo GLB (con rigging, sin morph targets).
 * 2. Inyecta la animación Idle desde un archivo separado.
 * 3. Mueve el hueso de la mandíbula en `useFrame` según el volumen del audio.
 */
const AvatarModel: FC<AvatarModelProps> = ({ volume }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const jawRef = useRef<THREE.Bone | null>(null);

  // ─── Carga del modelo ────────────────────────────────────────────
  const { scene } = useGLTF(MODEL_PATH);

  // Clonar la escena para evitar conflictos si se monta varias veces
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // ─── Carga de la animación idle ──────────────────────────────────
  const { animations: idleAnimations } = useGLTF(IDLE_PATH);
  const { actions } = useAnimations(idleAnimations, groupRef);

  // ─── Reproducir idle al montar ───────────────────────────────────
  useEffect(() => {
    // Intentar reproducir la primera animación disponible
    const actionName = Object.keys(actions)[0];
    if (actionName && actions[actionName]) {
      actions[actionName]!.reset().fadeIn(0.5).play();
    }

    return () => {
      if (actionName && actions[actionName]) {
        actions[actionName]!.fadeOut(0.5);
      }
    };
  }, [actions]);

  // ─── Encontrar el hueso de la mandíbula ──────────────────────────
  useEffect(() => {
    const jawNames = [
      "mixamorigJaw",
      "Jaw",
      "jaw",
      "mixamorig:Jaw",
      "mixamorig_Jaw",
    ];

    // Buscar en el árbol clonado
    clonedScene.traverse((child) => {
      if (jawRef.current) return;
      if (!(child as THREE.Bone).isBone) return;
      const name = child.name;
      if (
        jawNames.includes(name) ||
        name.toLowerCase().includes("jaw")
      ) {
        jawRef.current = child as THREE.Bone;
      }
    });
  }, [clonedScene]);

  // ─── Lip-sync: mapear volumen → rotación X de la mandíbula ──────
  useFrame(() => {
    if (!jawRef.current) return;

    const target = THREE.MathUtils.lerp(JAW_MIN, JAW_MAX, volume.current);

    // Suavizar para evitar saltos bruscos
    jawRef.current.rotation.x = THREE.MathUtils.lerp(
      jawRef.current.rotation.x,
      target,
      0.25
    );
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
};

// Pre-cargar los assets
useGLTF.preload(MODEL_PATH);
useGLTF.preload(IDLE_PATH);

export default AvatarModel;
