export function HackRobot() {
  return (
    <model-viewer
      src="../glb/hack-robot.glb"
      // camera-orbit="65deg 0 0" // change the initial angle and position of the camera
      // shadow-intensity="3"
      // shadow-softness="1.5"
      // camera-controls
    />
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
