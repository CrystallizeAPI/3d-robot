import { Form, Input, Button } from "../components";
import { useModelViewer } from "../hooks";

export function Ar() {
  const modelViewerRef = useModelViewer();

  return (
    <>
      <model-viewer
        src="../glb/hack-robot.glb"
        camera-orbit="65deg 0 0" // change the initial angle and position of the camera
        shadow-intensity="3"
        shadow-softness="1.5"
        camera-controls
        ref={modelViewerRef}
        ar
        touch-action="pan-y"
      />
      <Form
        onSubmit={(value) => {
          modelViewerRef.current?.model?.materials?.[0].pbrMetallicRoughness.setBaseColorFactor(value);
        }}
      >
        <Input />
        <Button>Change color</Button>
      </Form>
    </>
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
