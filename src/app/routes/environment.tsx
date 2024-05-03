import { useEffect, useState } from "react";
import { useModelViewer } from "../hooks";
import { ActionBar, RadioButton } from "../components";

const professions = ["Universal", "Chef", "Viking"];

export function Environment() {
  const modelViewerRef = useModelViewer();
  const [variants, setVariants] = useState<string[]>([]);
  const getSkyboxUrl = (fileName: string) => `./glb/${fileName}.webp`;
  const [skybox, setSkybox] = useState<string | null>(getSkyboxUrl(professions[0]));

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
        camera-controls
        shadow-intensity="3"
        shadow-softness="1.5"
        loading="eager"
        reveal="manual"
        poster="./glb/ebv-poster.webp"
        skybox-image={skybox}
        skybox-height="1.2m"
        camera-orbit="90deg 63deg 0"
        max-camera-orbit="auto 85deg auto"
        min-field-of-view="60deg"
        max-field-of-view="60deg"
      />

      <ActionBar>
        {variants.map((variant, index) => (
          <RadioButton
            name="variant"
            value={variant}
            defaultChecked={index === 0}
            onClick={() => {
              if (modelViewerRef.current) {
                modelViewerRef.current.variantName = variant;
              }
            }}
          >
            {variant}
          </RadioButton>
        ))}
      </ActionBar>

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

                // Set skybox
                setSkybox(getSkyboxUrl(visible));
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
