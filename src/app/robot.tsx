export function Robot() {
  return (
    <>
      <model-viewer
        src="./robot.glb"
        camera-orbit="65deg 0 0"
        shadow-intensity="3"
        shadow-softness="1.5"
        camera-controls
      />
    </>
  );
}
