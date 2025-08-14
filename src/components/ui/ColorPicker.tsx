import type { ColorPickerProps } from "../../types";
import { COLOR_PALETTE } from "../../constants/helmets";

export default function ColorPicker({
  customColor,
  onColorChange,
}: ColorPickerProps) {
  return (
    <div className="control-section">
      <label className="control-label elegant-font">
        Color Scheme
      </label>

      <div className="color-picker-section">
        <div className="color-picker-row">
          <input
            type="color"
            value={customColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="color-input"
          />
          <div className="color-display">
            {customColor.toUpperCase()}
          </div>
        </div>

        <div className="color-palette">
          {COLOR_PALETTE.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`color-button ${customColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}