import { useState, useEffect } from "react";
import type { ResponsiveControlsConfig } from "../types/hooks";

export function useResponsiveControls(): ResponsiveControlsConfig {
  const [config, setConfig] = useState<ResponsiveControlsConfig>({
    enablePan: false,
    enableZoom: true,
    enableRotate: true,
    minDistance: 1.5,
    maxDistance: 4,
    dampingFactor: 0.05,
    rotateSpeed: 1,
    zoomSpeed: 1,
    touchAction: "none",
  });

  useEffect(() => {
    const updateConfig = () => {
      const isMobile = window.innerWidth <= 768;
      const isSmallMobile = window.innerWidth <= 480;

      setConfig({
        enablePan: false,
        enableZoom: true,
        enableRotate: true,
        minDistance: isMobile ? 1.8 : 1.5,
        maxDistance: isMobile ? 3.5 : 4,
        dampingFactor: isMobile ? 0.08 : 0.05,
        rotateSpeed: isMobile ? 0.8 : 1,
        zoomSpeed: isSmallMobile ? 0.6 : isMobile ? 0.8 : 1,
        touchAction: "pan-y", // Allow vertical scrolling but handle horizontal touch
      });
    };

    updateConfig();
    window.addEventListener("resize", updateConfig);
    window.addEventListener("orientationchange", updateConfig);

    return () => {
      window.removeEventListener("resize", updateConfig);
      window.removeEventListener("orientationchange", updateConfig);
    };
  }, []);

  return config;
}
