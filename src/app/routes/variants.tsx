import { useRef, useEffect, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";

export function Variants() {
    const modelViewerRef = useRef<ModelViewerElement>(null);
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
                src="./variants.glb"
                camera-orbit="65deg 0 0"
                camera-controls
                shadow-intensity="3"
                shadow-softness="1.5"
            />

            <ul className="action-bar">
                {variants.map((variant) => (
                    <li key={variant}>
                        <button
                            onClick={() => {
                                if (modelViewerRef.current) {
                                    modelViewerRef.current.variantName =
                                        variant;
                                }
                            }}
                        >
                            {variant}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
