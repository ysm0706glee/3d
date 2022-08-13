import { useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export const Person = (props) => {
  const { nodes } = useGLTF("/person.glb");

  const [aoMap, armMap, diffMap, dispMap, norDxMap, norGlMap, roughMap] =
    useTexture([
      "textures/rust_coarse_01_ao_4k.jpg",
      "textures/rust_coarse_01_arm_4k.jpg",
      "textures/rust_coarse_01_diff_4k.jpg",
      "textures/rust_coarse_01_disp_4k.jpg",
      "textures/rust_coarse_01_nor_dx_4k.jpg",
      "textures/rust_coarse_01_nor_gl_4k.jpg",
      "textures/rust_coarse_01_rough_4k.jpg",
    ]);

  useMemo(() => {
    if (!props.paintMaterial) return;
    const color = props.paintMaterial.color.getStyle();
    // copy original material without overwriting custom color
    props.paintMaterial.color.setStyle(color);
  }, [props.paintMaterial]);

  return (
    <group {...props} dispose={null} position={[7, -3, -3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        position={[0, 1.07, 0]}
      >
        <meshStandardMaterial map={norGlMap} roughness={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RightHand.geometry}
        material={nodes.RightHand.material}
        position={[1.59, 1.08, 0]}
        rotation={[0, 0, 0.38]}
        scale={[1, 0.1, 0.1]}
      >
        <meshStandardMaterial map={norGlMap} roughness={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeftHand.geometry}
        material={nodes.LeftHand.material}
        position={[-1.59, 1.08, 0]}
        rotation={[0, 0, -0.38]}
        scale={[1, 0.1, 0.1]}
      >
        <meshStandardMaterial map={norGlMap} roughness={1} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 3.06, 0]}
      >
        <meshStandardMaterial map={norGlMap} roughness={1} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/person.glb");
