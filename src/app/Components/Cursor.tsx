"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);

    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] h-15 w-15 rounded-full border border-white/30 shadow-xl transition-transform duration-300 ease-out`}
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px) scale(${
          hovered ? 1.3 : 1
        })`,
        backdropFilter: "blur(8px) saturate(180%)",
        WebkitBackdropFilter: "blur(8px) saturate(180%)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    />
  );
}
