"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  twinklePhase: number;
  twinkleSpeed: number;
  opacity: number;
};

const STAR_COUNT = 100;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let animationId: number;

    function createStar(): Star {
      const baseRadius = randomBetween(0.5, 1.7);
      return {
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        baseRadius,
        radius: baseRadius,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: randomBetween(0.8, 1.8),
        opacity: randomBetween(0.7, 1),
      };
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(createStar());
      }
    }

    function resizeCanvas() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initStars();
    }

    function drawStars(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const star of stars) {
        const twinkle =
          0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        star.radius = star.baseRadius * (0.6 + 0.4 * twinkle);
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx!.shadowColor = "#fff";
        ctx!.shadowBlur = 10 * twinkle;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    function animate(time: number) {
      drawStars(time);
      animationId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    animate(0);

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 block h-screen w-screen"
    />
  );
}
