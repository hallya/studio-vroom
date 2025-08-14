import type { Helmet } from "../types";

export const HELMETS: Helmet[] = [
  {
    id: "racing-a",
    name: "Racing Helmet A",
    modelPath: "/models/model-a.glb",
    color: "#DC143C",
  },
  {
    id: "racing-b",
    name: "Racing Helmet B",
    modelPath: "/models/model-b.glb",
    color: "#1E90FF",
  },
];

export const COLOR_PALETTE = [
  "#DC143C", // Crimson red (Ferrari, Ducati style)
  "#FFD700", // Gold yellow (Yamaha Kenny Roberts)
  "#1E90FF", // Dodger blue (Suzuki classic)
  "#FF4500", // Orange red (Honda Marc Marquez style)
  "#32CD32", // Lime green (Kawasaki classic)
  "#8A2BE2", // Blue violet (Yamaha alternative)
  "#000000", // Jet black (classic racing)
  "#FFFFFF", // Pure white (Arai/Shoei classic)
  "#B22222", // Fire brick red (Marlboro style)
  "#228B22", // Forest green (Bennetton F1 inspired)
  "#4169E1", // Royal blue (Rothmans style)
  "#FF6347", // Tomato red (Repsol inspired)
];
