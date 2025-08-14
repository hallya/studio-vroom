export interface Helmet {
  id: string;
  name: string;
  modelPath: string;
  color?: string;
  scale?: [number, number, number];
  position?: [number, number, number];
}

export type BackgroundMode = "studio" | "transparent" | "workshop";
