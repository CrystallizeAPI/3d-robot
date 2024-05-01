// import { useEffect, useState } from "react";
// import { useModelViewer } from "../hooks";
// import { ActionBar, Button } from "../components";

export function Variants() {
  // const modelViewerRef = useModelViewer();
  // const [variants, setVariants] = useState<string[]>([]);

  // useEffect(() => {
  //   const modelViewer = modelViewerRef.current;

  //   modelViewer?.addEventListener("load", () => {
  //     setVariants(modelViewer.availableVariants);
  //   });
  // }, []);

  return (
    <>
      <model-viewer
        //ref={modelViewerRef}
        src="../glb/variants.glb"
        camera-orbit="65deg 0 0"
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
      />
      {/* <ActionBar>
        {variants.map((variant) => (
          <Button
            onClick={() => {
              if (modelViewerRef.current) {
                modelViewerRef.current.variantName = variant;
              }
            }}
          >
            {variant}
          </Button>
        ))}
      </ActionBar> */}
    </>
  );
}
