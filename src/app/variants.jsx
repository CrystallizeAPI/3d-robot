import { useEffect, useRef } from "react";

export function HackRobot() {
  const modelViewerRef = useRef();

  useEffect(() => {
    modelViewerRef.current.addEventListener("load", () => {
      console.log(modelViewerRef.current.availableVariants);
      modelViewerRef.current.variantName = "copper";

      console.log(modelViewerRef.current.variantName);
    });
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src="../../glb/robot-nodes/variants.glb"
      camera-orbit="65deg 0 0"
      camera-controls
      shadow-intensity="3"
      shadow-softness="1.5"
      exposure="1.3"
    />
  );
}
