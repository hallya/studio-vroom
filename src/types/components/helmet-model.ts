import type { Helmet } from "../helmet";

export interface HelmetModelProps {
  helmet: Helmet;
  animationEnabled: boolean;
  customColor: string;
  metalness: number;
  roughness: number;
}