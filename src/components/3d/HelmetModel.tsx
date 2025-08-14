import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import type { HelmetModelProps } from "../../types";

export default function HelmetModel({
  helmet,
  animationEnabled,
  customColor,
  metalness,
  roughness,
}: HelmetModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(helmet.modelPath);
  const { actions, names } = useAnimations(animations, groupRef);

  // Clone to avoid conflicts with multiple instances
  const clonedScene = scene.clone();

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) => {
              if (material instanceof THREE.MeshStandardMaterial) {
                material.color.setHex(
                  parseInt(customColor.replace("#", ""), 16)
                );
                material.metalness = metalness;
                material.roughness = roughness;
              }
            });
          } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.color.setHex(
              parseInt(customColor.replace("#", ""), 16)
            );
            mesh.material.metalness = metalness;
            mesh.material.roughness = roughness;
          }
        }
      }
    });
  }, [customColor, metalness, roughness, clonedScene]);

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