import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import type { Helmet, BackgroundMode } from "../types";
import { HELMETS } from "../constants/helmets";

import HelmetModel from "./3d/HelmetModel";
import LoadingSpinner from "./ui/LoadingSpinner";
import ModelSelector from "./ui/ModelSelector";

import InfoPanel from "./ui/InfoPanel";

import { getBackgroundStyle } from "../utils/styles";
import { preloadHelmetModels } from "../utils/preloader";
import { useResponsiveControls } from "../hooks/useResponsiveControls";

export default function HelmetConfigurator() {
  const [selectedHelmet, setSelectedHelmet] = useState<Helmet>(HELMETS[0]);
  const [backgroundMode] = useState<BackgroundMode>("workshop");
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const controlsConfig = useResponsiveControls();

  useEffect(() => {
    preloadHelmetModels();
  }, []);

  useEffect(() => {
    let timer: number;

    if (isUserInteracting) {
      timer = window.setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000);
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [isUserInteracting]);

  return (
    <div
      className="helmet-configurator"
      style={getBackgroundStyle(backgroundMode)}
    >
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
          onStart={() => setIsUserInteracting(true)}
          onChange={() => setIsUserInteracting(true)}
        />

        <Suspense fallback={<LoadingSpinner />}>
          <HelmetModel
            helmet={selectedHelmet}
            animationEnabled={true}
            isUserInteracting={isUserInteracting}
          />
        </Suspense>
      </Canvas>

      <div className="controls-container">
        <ModelSelector
          selectedHelmet={selectedHelmet}
          onHelmetChange={setSelectedHelmet}
        />

        <div className="main-control-panel elegant-panel">
          <div className="main-title-section">
            <div className="brand-header">
              <h1 className="main-title motogp-title">Studio Vroom</h1>
              <p className="main-tagline elegant-font">Art on helmet</p>
              <p className="main-description elegant-font">
                Designs dedicated to racing
              </p>
            </div>
          </div>
        </div>
      </div>

      <InfoPanel />
    </div>
  );
}
