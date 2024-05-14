import { useEffect, useState } from "react";
import { useModelViewer } from "../hooks";
import { VariantsBar } from "../components";

export function Skills() {
  const modelViewerRef = useModelViewer();
  const [variants, setVariants] = useState<string[]>([]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      setVariants(modelViewer.availableVariants);
    });
  }, []);

  return (
    <>
      <model-viewer
        ref={modelViewerRef}
        src="./glb/skills.glb"
        camera-orbit="65deg 0 0"
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
      />
      <VariantsBar variants={variants} onSelect={(variant) => (modelViewerRef.current.variantName = variant)} />
    </>
  );
}

// const skills = ["Universal", "Chef", "Viking"];

// loading="eager"
// reveal="manual"
// poster="./glb/poster.webp"

// modelViewer.model?.materials.forEach(({ name }) => {
//   if (skills.some((skill) => name.startsWith(skill))) {
//     const material = modelViewer.model?.getMaterialByName(name);
//     material?.setAlphaMode("MASK");
//     material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
//   }
// });

// setTimeout(() => modelViewer.dismissPoster(), 0);

{
  /* <SkillsBar
skills={skills}
onSelect={(visibleMaterial) => {
  modelViewerRef.current?.model?.materials.forEach(({ name }) => {
    const material = modelViewerRef.current?.model?.getMaterialByName(name);

    if (name.startsWith(visibleMaterial)) {
      material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
    } else if (skills.some((skill) => name.startsWith(skill))) {
      material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
    }
  });
}}
/> */
}
