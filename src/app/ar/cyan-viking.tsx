export function CyanViking() {
  return (
    <div className="ar">
      <model-viewer
        ar
        src="./ar/cyan-viking.glb"
        camera-orbit="65deg 0 0"
        shadow-intensity="3"
        shadow-softness="1.5"
        camera-controls
      />
    </div>
  );
}
