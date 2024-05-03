import { useEffect } from "react";
import { useModelViewer } from "../hooks";

export function Ar() {
  const modelViewerRef = useModelViewer();

  useEffect(() => {
    modelViewerRef.current?.addEventListener("ar-status", (event) => {
      if (event.detail.status === "failed") {
        const error = document.querySelector("#error");
        error.classList.remove("hide");
        error.addEventListener("transitionend", (event) => {
          error.classList.add("hide");
        });
      }
    });
  }, []);

  return (
    <model-viewer
      src="../glb/hack-robot.glb"
      camera-orbit="65deg 0 0"
      shadow-intensity="3"
      shadow-softness="1.5"
      camera-controls
      ref={modelViewerRef}
      ar
      ar-scale="fixed"
      touch-action="pan-y"
      xr-environment
      ios-src="../glb/hack-robot.usdz"
      ar-modes="scene-viewer quick-look"
    >
      <div id="error" className="hide">
        AR is not supported on this device
      </div>
    </model-viewer>
  );
}

// $0.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([Math.random(), Math.random(), Math.random()])
