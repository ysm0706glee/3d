import { useRef } from "react";
import { a, useSpring } from "@react-spring/three";
import { useControls } from "leva";

export const Light = (props) => {
  const spot = useRef();

  const { intensity, ...spotProps } = useControls({
    castShadow: true,
    intensity: 1,
  });

  const spotSpring = useSpring({
    intensity: props.light ? intensity : 0,
    delay: props.light ? 0 : 0,
  });

  return (
    <>
      <a.spotLight
        ref={spot}
        color="#fff"
        position={[7, 3, 6]}
        decay={0}
        angle={Math.PI * 0.15}
        distance={10}
        penumbra={1}
        shadow-bias={-0.002}
        {...spotProps}
        {...spotSpring}
      />
    </>
  );
};
