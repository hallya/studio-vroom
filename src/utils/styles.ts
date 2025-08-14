import type { BackgroundMode } from "../types";

export function getBackgroundStyle(backgroundMode: BackgroundMode) {
  switch (backgroundMode) {
    case "workshop":
      return {
        backgroundImage: "url(/bg-studio-vroom2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      };
    case "studio":
      return {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      };
    case "transparent":
      return {
        background: "#f5f5f5",
      };
    default:
      return {};
  }
}