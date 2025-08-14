import { useState, useEffect } from "react";

import type { Helmet, BackgroundMode } from "../types";
import { HELMETS } from "../constants/helmets";

import Scene3D from "./3d/Scene3D";
import ControlsContainer from "./ui/ControlsContainer";
import ContactIcons from "./ui/ContactIcons";

import { getBackgroundStyle } from "../utils/styles";
import { preloadHelmetModels } from "../utils/preloader";
import { useResponsiveControls } from "../hooks/useResponsiveControls";

export default function HelmetConfigurator() {
  const [selectedHelmet, setSelectedHelmet] = useState<Helmet>(HELMETS[0]);
  const [backgroundMode] = useState<BackgroundMode>("workshop");
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [isCustomSectionExpanded, setIsCustomSectionExpanded] =
    useState<boolean>(false);
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
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCustomSection();
    }
  };

  return (
    <div
      className="helmet-configurator"
      style={getBackgroundStyle(backgroundMode)}
    >
      <Scene3D
        selectedHelmet={selectedHelmet}
        backgroundMode={backgroundMode}
        isUserInteracting={isUserInteracting}
        controlsConfig={controlsConfig}
        onInteractionStart={() => setIsUserInteracting(true)}
        onInteractionChange={() => setIsUserInteracting(true)}
      />

      <ControlsContainer
        selectedHelmet={selectedHelmet}
        onHelmetChange={setSelectedHelmet}
        isCustomSectionExpanded={isCustomSectionExpanded}
        onToggleCustomSection={toggleCustomSection}
        onCustomSectionKeyDown={handleCustomSectionKeyDown}
      />

      <ContactIcons />
    </div>
  );
}
