import { useEffect, useRef } from "react";
import type { ModelViewerElement } from "../types";

export function Variants() {
  const modelViewerRef = useRef<ModelViewerElement>(null);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      console.log(modelViewer.availableVariants);
      modelViewer.variantName = "copper";

      console.log(modelViewer.variantName);
    });
  }, []);

  return (
    <model-viewer
      ref={modelViewerRef}
      src="../glb/variants.glb"
      camera-orbit="65deg 0 0"
      camera-controls
      shadow-intensity="3"
      shadow-softness="1.5"
    />
  );
}
