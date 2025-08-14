import { Html } from "@react-three/drei";

export default function LoadingSpinner() {
  return (
    <Html center>
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading 3D model...</p>
      </div>
    </Html>
  );
}