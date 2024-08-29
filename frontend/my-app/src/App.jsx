import { Experience } from "./components/Experience";
////https://models.readyplayer.me/66b7c2721f34a3fad9fb15f9.glb
//MMZYVW
//dsf
import { Canvas } from "@react-three/fiber";
export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 16], fov: 62 }}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}
 