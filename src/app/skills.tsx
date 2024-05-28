import { useEffect, useState, useRef } from "react";
import type { ModelViewerElement } from "@google/model-viewer";

const skillMaterialsNameMap = {
  universal: [],
  chef: ["Chef hat", "Chef apron"],
  viking: ["Viking hat", "Viking fur"],
} as const;
const skills = Object.keys(skillMaterialsNameMap) as (keyof typeof skillMaterialsNameMap)[];
const materialsName = skills.flatMap((skill) => [...skillMaterialsNameMap[skill]]);

const hideMaterials = (modelViewer: ModelViewerElement | null) => {
  materialsName.forEach((materialName) => {
    const material = modelViewer?.model?.getMaterialByName(materialName);
    material?.setAlphaMode("MASK");
    material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
  });
};

export function Skills() {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const [variants, setVariants] = useState<string[]>([]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      setVariants(modelViewer.availableVariants);

      hideMaterials(modelViewer);

      setTimeout(() => modelViewer.dismissPoster(), 0);
    });
  }, []);

  return (
    <>
      <model-viewer
        ref={modelViewerRef}
        src="./skills.glb"
        camera-orbit="65deg 0 0"
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
        loading="eager"
        reveal="manual"
        poster="./poster.webp"
      />

      <ul className="action-bar">
        {variants.map((variant) => (
          <li key={variant}>
            <button
              onClick={() => {
                if (modelViewerRef.current) {
                  modelViewerRef.current.variantName = variant;
                }
              }}
            >
              {variant}
            </button>
          </li>
        ))}
      </ul>

      <ul className="action-bar">
        {skills.map((skill) => (
          <li key={skill}>
            <button
              onClick={() => {
                const modelViewer = modelViewerRef.current;
                hideMaterials(modelViewer);

                skillMaterialsNameMap[skill].forEach((materialName) => {
                  const material = modelViewer?.model?.getMaterialByName(materialName);
                  material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                });
              }}
            >
              {skill}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
