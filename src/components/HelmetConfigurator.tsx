import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import type { Helmet, BackgroundMode } from "../types";
import { HELMETS } from "../constants/helmets";

import HelmetModel from "./3d/HelmetModel";
import LoadingSpinner from "./ui/LoadingSpinner";
import ModelSelector from "./ui/ModelSelector";
import ColorPicker from "./ui/ColorPicker";
import InfoPanel from "./ui/InfoPanel";

import { getBackgroundStyle } from "../utils/styles";
import { preloadHelmetModels } from "../utils/preloader";

export default function HelmetConfigurator() {
  const [selectedHelmet, setSelectedHelmet] = useState<Helmet>(HELMETS[0]);
  const [customColor, setCustomColor] = useState<string>("#DC143C");
  const [backgroundMode] = useState<BackgroundMode>("workshop");

  useEffect(() => {
    if (selectedHelmet.color) {
      setCustomColor(selectedHelmet.color);
    }
  }, [selectedHelmet]);

  useEffect(() => {
    preloadHelmetModels();
  }, []);

  return (
    <div className="helmet-configurator" style={getBackgroundStyle(backgroundMode)}>
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
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={1.5}
          maxDistance={4}
          enableDamping={true}
          dampingFactor={0.05}
        />

        <Suspense fallback={<LoadingSpinner />}>
          <HelmetModel
            helmet={selectedHelmet}
            animationEnabled={false}
            customColor={customColor}
            metalness={0.2}
            roughness={0.4}
          />
        </Suspense>
      </Canvas>

      <div className="main-control-panel elegant-panel">
        <div className="main-title-section">
          <div className="brand-header">
            <h1 className="main-title motogp-title">
              Studio Vroom
            </h1>
            <p className="main-tagline elegant-font">Art on helmet</p>
            <p className="main-description elegant-font">Designs dedicated to racing</p>
          </div>
        </div>

        <ModelSelector
          selectedHelmet={selectedHelmet}
          onHelmetChange={setSelectedHelmet}
        />

        <ColorPicker
          customColor={customColor}
          onColorChange={setCustomColor}
        />
      </div>

      <InfoPanel />
    </div>
  );
}