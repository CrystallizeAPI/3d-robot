export function HackRobot() {
  return (
    <model-viewer
      src="../../glb/robot-nodes/Default.glb"
      camera-orbit="65deg 0 0"
      camera-controls
      shadow-intensity="3"
      shadow-softness="1.5"
      exposure="1.3"
    />
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
