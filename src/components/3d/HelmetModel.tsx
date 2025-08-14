import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import type { HelmetModelProps } from "../../types";

export default function HelmetModel({
  helmet,
  animationEnabled,
}: HelmetModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(helmet.modelPath);
  const { actions, names } = useAnimations(animations, groupRef);

  // Clone to avoid conflicts with multiple instances
  const clonedScene = scene.clone();

  useEffect(() => {
    if (animationEnabled && names.length > 0) {
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.reset().play();
          action.setLoop(THREE.LoopRepeat, Infinity);
        }
      });
    } else {
      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.stop();
        }
      });
    }
  }, [animationEnabled, actions, names]);

  // Fallback rotation when no animations available
  useFrame(() => {
    if (groupRef.current && !animationEnabled && names.length === 0) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={clonedScene}
        scale={helmet.scale || [1.5, 1.5, 1.5]}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </group>
  );
}
