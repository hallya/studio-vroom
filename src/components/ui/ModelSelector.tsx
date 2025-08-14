import type { ModelSelectorProps } from "../../types";
import { HELMETS } from "../../constants/helmets";

export default function ModelSelector({
  selectedHelmet,
  onHelmetChange,
}: ModelSelectorProps) {
  return (
    <div className="control-section">
      <label className="control-label elegant-font">
        Helmet Model
      </label>
      <select
        value={selectedHelmet.id}
        onChange={(e) => {
          const helmet = HELMETS.find((h) => h.id === e.target.value);
          if (helmet) onHelmetChange(helmet);
        }}
        className="model-select elegant-font"
      >
        {HELMETS.map((helmet) => (
          <option key={helmet.id} value={helmet.id}>
            {helmet.name}
          </option>
        ))}
      </select>
    </div>
  );
}