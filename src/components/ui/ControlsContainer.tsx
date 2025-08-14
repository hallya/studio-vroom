import type { Helmet } from "../../types";
import ModelSelector from "./ModelSelector";
import BrandHeader from "./BrandHeader";
import CustomDesignSection from "./CustomDesignSection";

interface ControlsContainerProps {
  selectedHelmet: Helmet;
  onHelmetChange: (helmet: Helmet) => void;
  isCustomSectionExpanded: boolean;
  onToggleCustomSection: () => void;
  onCustomSectionKeyDown: (event: React.KeyboardEvent) => void;
}

export default function ControlsContainer({
  selectedHelmet,
  onHelmetChange,
  isCustomSectionExpanded,
  onToggleCustomSection,
  onCustomSectionKeyDown,
}: ControlsContainerProps) {
  return (
    <div className="controls-container">
      <ModelSelector
        selectedHelmet={selectedHelmet}
        onHelmetChange={onHelmetChange}
      />

      <div className="main-control-panel elegant-panel">
        <BrandHeader />
        
        <CustomDesignSection
          isExpanded={isCustomSectionExpanded}
          onToggle={onToggleCustomSection}
          onKeyDown={onCustomSectionKeyDown}
        />
      </div>
    </div>
  );
}
