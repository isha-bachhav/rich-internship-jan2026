import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,

        color: 0x26a3ea,
        backgroundColor: 0x040f24,
        points: 20.0,
        maxDistance: 22.0,
        spacing: 15,
        showDots: false,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {children}
    </div>
  );
}
