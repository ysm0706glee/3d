import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import "./App.css";
import { Light } from "./components/Light";
import { Iphone } from "./components/Iphone";
import { Person } from "./components/Person";
import { Effects } from "./components/Bloom";
import { Camera } from "./components/Camera";

const App = () => {
  const [light, setLight] = useState(true);
  console.log("light: ", light);
  const [input, setInput] = useState("");

  return (
    <div>
      <Canvas style={{ position: "fixed", inset: 0 }} shadowMap>
        <Camera />
        <Light
          light={light}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Iphone input={input} setInput={setInput} />
        <Person input={input} />
        <Environment files="/kloppenheim_02_1k.hdr" background />
        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />

        <Effects />
        {/* <OrbitContr÷ols /> */}
      </Canvas>

      <Leva collapsed />

      <button style={{ position: "fixed" }} onClick={() => setLight(!light)}>
        Light {light ? "on" : "off"}
      </button>
    </div>
  );
};

export default App;
