import { useEffect, useRef } from "react";

export function HackRobot() {
  const modelViewerRef = useRef();

  useEffect(() => {
    modelViewerRef.current.addEventListener("load", () => {
      console.log(modelViewerRef.current.availableVariants);
      // modelViewerRef.current.variantName = "copper";

      const mat = modelViewerRef.current.model.materials[5];
      mat.setAlphaMode("MASK");

      console.log(mat.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]));
    });
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src="../../glb/robot/next-robot.glb"
      camera-orbit="65deg 0 0"
      camera-controls
      shadow-intensity="3"
      shadow-softness="1.5"
      exposure="1.3"
    />
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
