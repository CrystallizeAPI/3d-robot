import { useEffect, useState, useRef } from "react";
import type { ModelViewerElement } from "@google/model-viewer";

const skills = ["Universal", "Chef", "Viking"];

export function Skills() {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const [variants, setVariants] = useState<string[]>([]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      setVariants(modelViewer.availableVariants);

      modelViewer.model?.materials.forEach(({ name }) => {
        if (skills.some((skill) => name.startsWith(skill))) {
          const material = modelViewer.model?.getMaterialByName(name);
          material?.setAlphaMode("MASK");
          material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
        }
      });

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
                modelViewerRef.current?.model?.materials.forEach(({ name }) => {
                  const material = modelViewerRef.current?.model?.getMaterialByName(name);

                  if (name.startsWith(skill)) {
                    material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                  } else if (skills.some((skill) => name.startsWith(skill))) {
                    material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
                  }
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
