"use client";

import { useEffect, useRef } from "react";

const COUNT = 70;
const COLOR = "229, 9, 20";

type Fly = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  alphaDir: number;
};

export default function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const flies: Fly[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 1,
      alpha: Math.random(),
      alphaSpeed: Math.random() * 0.008 + 0.003,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const f of flies) {
        // drift
        f.x += f.vx;
        f.y += f.vy;

        // wrap edges
        if (f.x < 0) f.x = canvas.width;
        if (f.x > canvas.width) f.x = 0;
        if (f.y < 0) f.y = canvas.height;
        if (f.y > canvas.height) f.y = 0;

        // pulse alpha
        f.alpha += f.alphaSpeed * f.alphaDir;
        if (f.alpha >= 0.8) { f.alpha = 0.8; f.alphaDir = -1; }
        if (f.alpha <= 0.1) { f.alpha = 0.1; f.alphaDir = 1; }

        // glow
        const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 6);
        glow.addColorStop(0, `rgba(${COLOR}, ${f.alpha})`);
        glow.addColorStop(1, `rgba(${COLOR}, 0)`);

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR}, ${f.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
    />
  );
}