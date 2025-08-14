import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import type { Helmet, BackgroundMode } from "../types";
import { HELMETS } from "../constants/helmets";

import HelmetModel from "./3d/HelmetModel";
import LoadingSpinner from "./ui/LoadingSpinner";
import ModelSelector from "./ui/ModelSelector";

import ContactIcons from "./ui/ContactIcons";

import { getBackgroundStyle } from "../utils/styles";
import { preloadHelmetModels } from "../utils/preloader";
import { useResponsiveControls } from "../hooks/useResponsiveControls";

export default function HelmetConfigurator() {
  const [selectedHelmet, setSelectedHelmet] = useState<Helmet>(HELMETS[0]);
  const [backgroundMode] = useState<BackgroundMode>("workshop");
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isCustomSectionExpanded, setIsCustomSectionExpanded] = useState<boolean>(false);
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

  const toggleCustomSection = () => {
    setIsCustomSectionExpanded(!isCustomSectionExpanded);
  };

  const handleCustomSectionKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCustomSection();
    }
  };

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

          <section 
            className={`custom-design-section ${isCustomSectionExpanded ? 'expanded' : 'collapsed'}`} 
            aria-labelledby="custom-design-heading"
          >
            <header 
              className="custom-design-header"
              onClick={toggleCustomSection}
              onKeyDown={handleCustomSectionKeyDown}
              role="button"
              tabIndex={0}
              aria-expanded={isCustomSectionExpanded}
              aria-controls="custom-design-content"
            >
              <div className="custom-design-header-content">
                <h2 id="custom-design-heading" className="custom-design-title elegant-font">
                  Exclusive Custom Helmet
                </h2>
                <p className="custom-design-subtitle elegant-font">
                  Your vision, our expertise
                </p>
              </div>
              <div className={`expand-indicator ${isCustomSectionExpanded ? 'expanded' : ''}`}>
                <span className="expand-arrow">▼</span>
              </div>
            </header>
            
            <div 
              id="custom-design-content"
              className={`custom-design-content ${isCustomSectionExpanded ? 'expanded' : 'collapsed'}`}
              aria-hidden={!isCustomSectionExpanded}
            >
              <p className="custom-design-description elegant-font">
                Create a <strong>unique design</strong> for your racing helmet. 
                Our specialized workshop crafts <em>bespoke artwork</em> 
                 exclusively for you.
              </p>
              
              <div className="pricing-info" itemScope itemType="https://schema.org/Offer">
                <span className="price-label elegant-font">Starting from</span>
                <span className="price-amount" itemProp="price" content="1500">
                  €1,500
                </span>
                <meta itemProp="priceCurrency" content="EUR" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
              </div>
              
              <div className="custom-design-features" role="list" aria-label="Custom design service benefits">
                <span className="feature-item" role="listitem">✨ 100% unique design</span>
                <span className="feature-item" role="listitem">🎨 Handcrafted artwork</span>
                <span className="feature-item" role="listitem">🏁 Competition approved</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ContactIcons />
    </div>
  );
}
