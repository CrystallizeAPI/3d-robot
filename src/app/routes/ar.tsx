import { useModelViewer } from "../hooks";

export function Ar() {
  const modelViewerRef = useModelViewer();

  return (
    <model-viewer
      src="../glb/hack-robot.glb"
      camera-orbit="65deg 0 0"
      shadow-intensity="3"
      shadow-softness="1.5"
      camera-controls
      ref={modelViewerRef}
      ar
      ar-scale="fixed"
      touch-action="pan-y"
      xr-environment
      ios-src="../glb/hack-robot.usdz"
      style={{ maxWidth: "80vw", maxHeight: "80vh" }}
    />
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
