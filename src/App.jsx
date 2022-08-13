import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { a, useSpring, config } from "@react-spring/three";
import { Leva, useControls } from "leva";
import "./App.css";
import { Light } from "./components/Light";
import { Iphone } from "./components/Iphone";
import { Person } from "./components/Person";
import { Effects } from "./components/Bloom";
import { Camera } from "./components/Camera";

const colors = ["red", "green", "yellow", "hotpink", "blue"];

const App = () => {
  const person = useRef();
  const [light, setLight] = useState(true);
  const [input, setInput] = useState("");

  const [paintMaterial, setPaintMaterial] = useState();
  const [currentColorIndex, setColorIndex] = useState(0);

  const springProps = useSpring({
    color: colors[currentColorIndex],
    config: { duration: 1000 },
  });

  function onModelClick(e) {
    e.stopPropagation();
    setColorIndex((currentColorIndex + 1) % colors.length);
  }

  return (
    <div>
      <Canvas style={{ position: "fixed", inset: 0 }}>
        <Camera />
        <Light light={light} />
        <Iphone input={input} setInput={setInput} />
        <group ref={person}>
          <a.meshPhysicalMaterial ref={setPaintMaterial} {...springProps} />
          <Person
            onClick={onModelClick}
            rotation-y={Math.PI * -0.22}
            paintMaterial={paintMaterial}
          />
        </group>

        <Environment files="/kloppenheim_02_1k.hdr" background />

        <Effects />
      </Canvas>

      <Leva collapsed />

      <button style={{ position: "fixed" }} onClick={() => setLight(!light)}>
        Lights {light ? "on" : "off"}
      </button>
    </div>
  );
};

export default App;
