import { Html, useGLTF } from "@react-three/drei";

export const Iphone = (props) => {
  const { nodes, materials } = useGLTF("/iPhone.glb");

  const handleChange = (e) => {
    props.setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input: ", props.input);
  };

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.93, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038.geometry}
          material={materials["FrameGrey.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_1.geometry}
          material={materials["Front.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_2.geometry}
          material={materials["Antennaline.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_3.geometry}
          material={materials["BackGrey.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_4.geometry}
          material={materials["Rubber.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AntennaLineTop001.geometry}
          material={materials["Antennaline.001"]}
          position={[0, 0.02, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AntennaLineBottom001.geometry}
          material={materials["Antennaline.001"]}
          position={[0, -2.68, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={materials["Lens.001"]}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={materials["BackCaneraGrayRIng.002"]}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTopLens001.geometry}
          material={materials["Lens.001"]}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FlashBG001.geometry}
          material={materials["PinkFlash.002"]}
          position={[0.71, 1.03, -0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials["FrontCameraBlack.002"]}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AppleLogo001.geometry}
          material={materials["AppleLogo.001"]}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraP1001.geometry}
          material={materials["Black.015"]}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={materials["BackCaneraGrayRIng.002"]}
          position={[0.7, 1.18, -0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials["FrontSpeaker.001"]}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CameraBump001.geometry}
          material={materials["Frame.001"]}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials["iPhoneLogo.001"]}
          position={[0.2, -1.18, -0.08]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle032.geometry}
            material={materials["FrameGrey.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle032_1.geometry}
            material={materials["Frame.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MuteSwitch001.geometry}
          material={materials["FrameGrey.001"]}
          position={[-0.65, 0.92, 0.01]}
        />
        <group position={[0.98, -0.04, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle031.geometry}
            material={materials["Black.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle031_1.geometry}
            material={materials["FrameGrey.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VolumeButtons001.geometry}
          material={materials["FrameGrey.001"]}
          position={[-0.66, 0.21, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SCREEN.geometry}
          material={materials["Display.002"]}
        >
          <Html distanceFactor={2} position={[0, 1, 0]} transform>
            <form onSubmit={handleSubmit}>
              <input type="text" value={props.input} onChange={handleChange} />
              <button>Send</button>
            </form>
          </Html>
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload("/iPhone.glb");
