import { Suspense } from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import roboto from "../assets/roboto.json";

setTimeout(() => extend({ TextGeometry }), 0);

export const Text = ({ input }) => {
  const font = new FontLoader().parse(roboto);

  return (
    <Suspense fallback={<div>loading</div>}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <textGeometry args={[input, { font, size: 5, height: 1 }]} />
        <meshLambertMaterial attach="material" color={"gold"} />
      </mesh>
    </Suspense>
  );
};
