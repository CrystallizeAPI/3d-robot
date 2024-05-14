export function Variants() {
  return (
    <>
      <model-viewer
        src="./glb/variants.glb"
        camera-orbit="65deg 0 0"
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
      />
    </>
  );
}

// import { useEffect, useState } from "react";
// import { useModelViewer } from "../hooks";
// import { VariantsBar } from "../components";

//   const modelViewerRef = useModelViewer();
//   const [variants, setVariants] = useState<string[]>([]);

//   useEffect(() => {
//     const modelViewer = modelViewerRef.current;

//     modelViewer?.addEventListener("load", () => {
//       setVariants(modelViewer.availableVariants);
//     });
//   }, []);

// <VariantsBar variants={variants} onSelect={(variant) => (modelViewerRef.current.variantName = variant)} />
