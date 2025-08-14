import type { Helmet } from "../helmet";

export interface ModelSelectorProps {
  selectedHelmet: Helmet;
  onHelmetChange: (helmet: Helmet) => void;
}

export interface ColorPickerProps {
  customColor: string;
  onColorChange: (color: string) => void;
}

export interface InfoPanelProps {
  selectedHelmet: Helmet;
}