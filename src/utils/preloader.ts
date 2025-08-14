import { useGLTF } from "@react-three/drei";
import { HELMETS } from "../constants/helmets";

export function preloadHelmetModels() {
  HELMETS.forEach((helmet) => {
    useGLTF.preload(helmet.modelPath);
  });
}