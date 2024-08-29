import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Model } from "./Avator";

export const Experience = () => {
  
  const viewport = useThree((state) => state.viewport);
  const texture = useTexture("Image/textures.jpg");
  return (
    <>
      <Model position={[0, -1, 5]} scale={3.9} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};