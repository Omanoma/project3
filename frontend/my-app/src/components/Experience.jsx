import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Model } from "./Avator";
//https://models.readyplayer.me/66d0bb0550a930dac18f7e7f.glb
// BCSDJB
export const Experience = () => {
  
  const viewport = useThree((state) => state.viewport);
  const texture = useTexture("Image/textures.jpg");
  return (
    <>
      
      <Model position={[0, -3, 5]} scale={2} />
      <Environment preset="sunset" />
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};