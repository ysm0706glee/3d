import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { useControls } from "leva";

export const Effects = () => {
  const bloomProps = useControls("bloom", {
    luminanceThreshold: { value: 0.2, min: 0, max: 1 },
    intensity: { value: 1, min: 0, max: 5 },
    radius: { value: 1, min: 0, max: 1 },
    levels: { value: 7, min: 0, max: 10, steps: 1 },
    mipmapBlur: true,
  });

  const noiseProps = useControls("noise", {
    opacity: { value: 0.3, min: 0, max: 1 },
  });

  return (
    <EffectComposer>
      <Bloom {...bloomProps} />
      <Noise {...noiseProps} />
    </EffectComposer>
  );
};
