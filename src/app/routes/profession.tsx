import { useEffect, useState } from "react";
import { useModelViewer } from "../hooks";
import { ActionBar, RadioButton, VariantsBar } from "../components";

const professions = ["Universal", "Chef", "Viking"];

export function Profession() {
  const modelViewerRef = useModelViewer();
  const [variants, setVariants] = useState<string[]>([]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    modelViewer?.addEventListener("load", () => {
      setVariants(modelViewer.availableVariants);

      modelViewer.model?.materials.forEach(({ name }) => {
        if (professions.some((profession) => name.startsWith(profession))) {
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
      <ActionBar>
        {professions.map((profession, index) => (
          <RadioButton
            name="profession"
            value={profession}
            defaultChecked={index === 0}
            onClick={() => {
              const visible = profession;
              const visibleIndex = professions.findIndex((profession) => profession === visible);
              const hidden = [...professions];
              hidden.splice(visibleIndex, 1);

              modelViewerRef.current?.model?.materials.forEach(({ name }) => {
                const material = modelViewerRef.current?.model?.getMaterialByName(name);

                if (name.startsWith(profession)) {
                  material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                } else if (hidden.some((profession) => name.startsWith(profession))) {
                  material?.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
                }
              });
            }}
          >
            {profession}
          </RadioButton>
        ))}
      </ActionBar>
    </>
  );
}
