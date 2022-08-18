import { useEffect, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

export const Person = (props) => {
  const { nodes } = useGLTF("/person.glb");

  const [baseColor, metallic, normal, roughness] = useTexture([
    "textures/Metal iron 2_baseColor.jpeg",
    "textures/Metal iron 2_metallic.jpeg",
    "textures/Metal iron 2_normal.jpeg",
    "textures/Metal iron 2_roughness.jpeg",
  ]);

  const [matrial, setMatrial] = useState();
  const [color, setColor] = useState("white");

  const springProps = useSpring({
    color,
    config: { duration: 1000 },
  });

  useEffect(() => {
    switch (props.input) {
      case "good":
        setColor("yellow");
        break;
      case "not good":
        setColor("blue");
        break;
      case "hot":
        setColor("red");
        break;
      default:
    }
  }, [props.input]);

  return (
    <>
      <a.meshStandardMaterial
        ref={setMatrial}
        roughness={0}
        roughnessMap={roughness}
        {...springProps}
      />
      <group {...props} dispose={null} position={[2, -0.5, 3]} scale={0.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={matrial}
          position={[0, 1.07, 0]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightHand.geometry}
          material={matrial}
          position={[1.59, 1.08, 0]}
          rotation={[0, 0, 0.38]}
          scale={[1, 0.1, 0.1]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftHand.geometry}
          material={matrial}
          position={[-1.59, 1.08, 0]}
          rotation={[0, 0, -0.38]}
          scale={[1, 0.1, 0.1]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={matrial}
          position={[0, 3.06, 0]}
        ></mesh>
      </group>
    </>
  );
};

useGLTF.preload("/person.glb");
