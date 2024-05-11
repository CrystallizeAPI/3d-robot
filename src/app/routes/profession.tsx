import { useEffect, useState } from "react";
import { useModelViewer } from "../hooks";
import { VariantsBar, ExpertiseBar } from "../components";

const expertise = ["Universal", "Chef", "Viking"];

export function Profession() {
  const modelViewerRef = useModelViewer();
  const [variants, setVariants] = useState<string[]>([]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      setVariants(modelViewer.availableVariants);

      modelViewer.model?.materials.forEach(({ name }) => {
        if (expertise.some((skill) => name.startsWith(skill))) {
          const material = modelViewer.model?.getMaterialByName(name);
          material?.setAlphaMode("MASK");
          material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
        }
      });

      setTimeout(() => modelViewer.dismissPoster(), 0);
    });
  }, [modelViewerRef.current]);

  return (
    <>
      <model-viewer
        ref={modelViewerRef}
        src="../glb/profession.glb"
        camera-orbit="65deg 0 0"
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
        loading="eager"
        reveal="manual"
        poster="./glb/poster.webp"
      />
      <VariantsBar variants={variants} onSelect={(variant) => (modelViewerRef.current.variantName = variant)} />

      <ExpertiseBar
        expertise={expertise}
        onSelect={(visibleMaterial) => {
          modelViewerRef.current?.model?.materials.forEach(({ name }) => {
            const material = modelViewerRef.current?.model?.getMaterialByName(name);

            if (name.startsWith(visibleMaterial)) {
              material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
            } else if (expertise.some((skill) => name.startsWith(skill))) {
              material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
            }
          });
        }}
      />
    </>
  );
}
