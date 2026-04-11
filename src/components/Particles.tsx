import { useEffect, useRef } from "react";

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 5;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, hsl(45 100% 60% / 0.8), hsl(45 100% 50% / 0));
        border-radius: 50%;
        left: ${left}%;
        bottom: -10px;
        animation: particle-drift ${duration}s linear ${delay}s infinite;
        pointer-events: none;
      `;
      container.appendChild(particle);
    };

    for (let i = 0; i < 30; i++) createParticle();

    return () => { container.innerHTML = ""; };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default Particles;
