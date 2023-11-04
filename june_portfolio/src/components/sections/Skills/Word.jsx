import { Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "Montserrat",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const textEl = useRef();
  const [hovered, setHovered] = useState(false);
  const handleHoverIn = (e) => (e.stopPropagation(), setHovered(true));
  const handleHoverOut = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    const { style } = document.body;
    if (hovered) style.cursor = "pointer";
    return () => {
      style.cursor = "auto";
    };
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    textEl.current.quaternion.copy(camera.quaternion);
    // Animate font color
    textEl.current.material.color.lerp(
      color.set(hovered ? "#03a9f4" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={textEl}
      onPointerOver={handleHoverIn}
      onPointerOut={handleHoverOut}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

export default Word;
