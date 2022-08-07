import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import "./App.css";
import { Light } from "./components/Light";
import { Iphone } from "./components/Iphone";
import { Text } from "./components/Text";

const App = () => {
  const [input, setInput] = useState("");
  const [isSent, setIsSent] = useState(false);

  return (
    <Canvas>
      <Light />
      <Iphone input={input} setInput={setInput} setIsSent={setIsSent} />
      {isSent ? <Text input={input} /> : null}
      <OrbitControls />
      <Environment files="/kloppenheim_02_1k.hdr" background />
    </Canvas>
  );
};

export default App;
