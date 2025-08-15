import { useState, useEffect, useRef } from "react";
import type { Helmet } from "../../types";

interface HelmetWheelProps {
  helmets: Helmet[];
  selectedHelmet: Helmet;
  onHelmetChange: (helmet: Helmet) => void;
}

export default function HelmetWheel({
  helmets,
  selectedHelmet,
  onHelmetChange,
}: HelmetWheelProps) {
  const [wheelRotation, setWheelRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const accumulatedScrollRef = useRef(0);
  const cumulativeRotationRef = useRef(0);

  const WHEEL_SLOTS = 12;
  const angleStep = 360 / WHEEL_SLOTS;

  const createInfiniteWheel = () => {
    const infiniteWheel = [];
    for (let i = 0; i < WHEEL_SLOTS; i++) {
      const helmetIndex = i % helmets.length;
      infiniteWheel.push({
        ...helmets[helmetIndex],
        wheelPosition: i,
        originalIndex: helmetIndex,
      });
    }
    return infiniteWheel;
  };

  const wheelSlots = createInfiniteWheel();

  const findVisuallySelectedHelmet = () => {
    const currentRotationNormalized = ((wheelRotation % 360) + 360) % 360;
    const targetAngle = 315;

    let closestSlot = wheelSlots[0];
    let minDiff = Infinity;

    wheelSlots.forEach((slot) => {
      const angle = slot.wheelPosition * angleStep;
      const slotAngleWithRotation =
        (((angle + currentRotationNormalized) % 360) + 360) % 360;
      let angleDiff = Math.abs(slotAngleWithRotation - targetAngle);
      if (angleDiff > 180) angleDiff = 360 - angleDiff;

      if (angleDiff < minDiff) {
        minDiff = angleDiff;
        closestSlot = slot;
      }
    });

    return helmets[closestSlot.originalIndex];
  };

  useEffect(() => {
    if (cumulativeRotationRef.current === 0) {
      const selectedWheelPosition = wheelSlots.findIndex(
        (slot) => slot.id === selectedHelmet.id
      );
      const initialRotation = -selectedWheelPosition * angleStep + 315;
      cumulativeRotationRef.current = initialRotation;
      setWheelRotation(initialRotation);
    }
  }, [selectedHelmet.id, wheelSlots, angleStep]);


  useEffect(() => {
    const visuallySelectedHelmet = findVisuallySelectedHelmet();
    if (visuallySelectedHelmet.id !== selectedHelmet.id) {
      onHelmetChange(visuallySelectedHelmet);
    }
  }, [wheelRotation]);


  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();

    accumulatedScrollRef.current += event.deltaY * 0.3;
    const threshold = 10;

    if (Math.abs(accumulatedScrollRef.current) >= threshold) {
      const scrollDirection = accumulatedScrollRef.current > 0 ? 1 : -1;

      cumulativeRotationRef.current += scrollDirection * angleStep;
      setWheelRotation(cumulativeRotationRef.current);
      accumulatedScrollRef.current = 0;
    }
  };

  return (
    <div className="helmet-wheel-container">
      <div className="helmet-name-display">
        {selectedHelmet.name}
      </div>
      
      <div
        ref={wheelRef}
        className="helmet-wheel"
        style={{
          transform: `rotate(${wheelRotation}deg)`,
        }}
        onWheel={handleWheel}
      >
        {wheelSlots.map((slot) => {
          const angle = slot.wheelPosition * angleStep;

          const currentRotationNormalized = ((wheelRotation % 360) + 360) % 360;
          const slotAngleWithRotation =
            (((angle + currentRotationNormalized) % 360) + 360) % 360;
          const targetAngle = 315;
          
          let angleDiff = Math.abs(slotAngleWithRotation - targetAngle);
          if (angleDiff > 180) angleDiff = 360 - angleDiff;
          const isSelected = angleDiff < 15;

          return (
            <div
              key={`${slot.id}-${slot.wheelPosition}`}
              className={`helmet-wheel-item ${isSelected ? "selected" : ""}`}
              style={{
                transform: `rotate(${angle}deg) translateY(-280px) rotate(${
                  -angle - wheelRotation
                }deg)`,
              }}
              onClick={() => onHelmetChange(helmets[slot.originalIndex])}
            >
              <div className="helmet-image-container">
                <img
                  src={`/helmet-images/${slot.id}.png`}
                  alt={slot.name}
                  className="helmet-image"
                  loading="lazy"
                />
                <div className="helmet-glow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
