export function Robot() {
  return (
    <>
      <model-viewer
        src="./glb/robot.glb"
        camera-orbit="65deg 0 0"
        shadow-intensity="3"
        shadow-softness="1.5"
        camera-controls
      />
    </>
  );
}

//
//     <model-viewer
//       src="./glb/robot.glb"
//       camera-orbit="65deg 0 0"
//       shadow-intensity="3"
//       shadow-softness="1.5"
//       camera-controls
//     />
// #FFC0CB  #F4C0FF
