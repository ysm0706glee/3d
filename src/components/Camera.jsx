import { useThree, useFrame } from "@react-three/fiber";
import lerp from "lerp";

export const Camera = () => {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x = lerp(camera.position.x, mouse.x, 0.01);
    camera.lookAt(0, 1, 0);
    camera.updateProjectionMatrix();
  });
};
