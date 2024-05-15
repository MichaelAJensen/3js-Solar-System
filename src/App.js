import { Canvas } from "@react-three/fiber";
import './App.css';
import Universe from "./majorBodies/Universe";
import { Html } from "@react-three/drei";

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <Universe />
      </Canvas>
    </div>
  );
}


export default App