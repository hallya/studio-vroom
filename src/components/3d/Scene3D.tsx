import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import type { Helmet, BackgroundMode } from "../../types";
import type { ResponsiveControlsConfig } from "../../types/hooks";
import HelmetModel from "./HelmetModel";
import LoadingSpinner from "../ui/LoadingSpinner";

interface Scene3DProps {
  selectedHelmet: Helmet;
  backgroundMode: BackgroundMode;
  isUserInteracting: boolean;
  controlsConfig: ResponsiveControlsConfig;
  onInteractionStart: () => void;
  onInteractionChange: () => void;
}

export default function Scene3D({
  selectedHelmet,
  backgroundMode,
  isUserInteracting,
  controlsConfig,
  onInteractionStart,
  onInteractionChange,
}: Scene3DProps) {
  return (
    <Canvas
      camera={{
        position: [1, 0, 3],
        fov: 60,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      className="canvas-3d"
    >
      <Environment
        preset={backgroundMode === "workshop" ? "warehouse" : "studio"}
      />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[3, 3, 3]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[-2, 2, 2]}
        intensity={0.3}
        color="#ffffff"
      />

      <OrbitControls
        enablePan={controlsConfig.enablePan}
        enableZoom={controlsConfig.enableZoom}
        enableRotate={controlsConfig.enableRotate}
        minDistance={controlsConfig.minDistance}
        maxDistance={controlsConfig.maxDistance}
        enableDamping={true}
        dampingFactor={controlsConfig.dampingFactor}
        rotateSpeed={controlsConfig.rotateSpeed}
        zoomSpeed={controlsConfig.zoomSpeed}
        touches={{ ONE: 0, TWO: 2 }}
        onStart={onInteractionStart}
        onChange={onInteractionChange}
      />

      <Suspense fallback={<LoadingSpinner />}>
        <HelmetModel
          helmet={selectedHelmet}
          animationEnabled={true}
          isUserInteracting={isUserInteracting}
        />
      </Suspense>
    </Canvas>
  );
}
