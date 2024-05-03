import { useModelViewer } from "../hooks";

export function Ar() {
  const modelViewerRef = useModelViewer();

  return (
    <model-viewer
      src="../glb/small-robot.glb"
      camera-orbit="65deg 0 0"
      shadow-intensity="3"
      shadow-softness="1.5"
      camera-controls
      ref={modelViewerRef}
      ar
      style={{ maxWidth: "80vw", maxHeight: "60vh" }}
    />
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
