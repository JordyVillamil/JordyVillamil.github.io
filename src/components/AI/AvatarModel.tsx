import { useRef, useEffect, useMemo, type FC } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

// ─── Paths públicos ──────────────────────────────────────────────────
const MODEL_PATH = "/avatar_tpose.glb";
const IDLE_PATH = "/animacion_idle.glb";

/**
 * Componente R3F que:
 * 1. Carga el modelo GLB con rigging.
 * 2. Inyecta y reproduce la animación Idle en loop.
 */
const AvatarModel: FC = () => {
  const groupRef = useRef<THREE.Group>(null!);

  // ─── Carga del modelo ────────────────────────────────────────────
  const { scene } = useGLTF(MODEL_PATH);

  // Clonar la escena para evitar conflictos si se monta varias veces
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // ─── Carga de la animación idle ──────────────────────────────────
  const { animations: idleAnimations } = useGLTF(IDLE_PATH);
  const { actions } = useAnimations(idleAnimations, groupRef);

  // ─── Reproducir idle al montar ───────────────────────────────────
  useEffect(() => {
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