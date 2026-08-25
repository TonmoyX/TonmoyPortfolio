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

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  life: number;
  maxLife: number;
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
    let meteors: Meteor[] = [];
    let animationId: number;
    let meteorTimer = 0;
    let nextMeteorAt = randomBetween(2500, 6000);

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

    function spawnMeteor() {
      const startX = randomBetween(0, canvas!.width);
      const angle = randomBetween(Math.PI * 0.15, Math.PI * 0.3);
      const speed = randomBetween(9, 15);
      meteors.push({
        x: startX,
        y: -20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: randomBetween(80, 160),
        life: 0,
        maxLife: randomBetween(40, 70),
      });
    }

    function drawStars(time: number) {
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

    function drawMeteors(dt: number) {
      meteors = meteors.filter((m) => m.life < m.maxLife);
      for (const m of meteors) {
        m.x += m.vx * dt;
        m.y += m.vy * dt;
        m.life += dt;

        const fadeIn = Math.min(m.life / 8, 1);
        const fadeOut = Math.max(0, 1 - Math.max(0, m.life - m.maxLife * 0.6) / (m.maxLife * 0.4));
        const alpha = fadeIn * fadeOut;

        const angle = Math.atan2(m.vy, m.vx);
        const tailX = m.x - Math.cos(angle) * m.length;
        const tailY = m.y - Math.sin(angle) * m.length;

        const gradient = ctx!.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = 1.6;
        ctx!.beginPath();
        ctx!.moveTo(m.x, m.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.arc(m.x, m.y, 1.6, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx!.shadowColor = "#fff";
        ctx!.shadowBlur = 10 * alpha;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    let lastTime = 0;
    function animate(time: number) {
      const dt = lastTime ? Math.min((time - lastTime) / 16.67, 3) : 1;
      lastTime = time;

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      drawStars(time);

      meteorTimer += dt * 16.67;
      if (meteorTimer >= nextMeteorAt) {
        spawnMeteor();
        meteorTimer = 0;
        nextMeteorAt = randomBetween(2500, 6000);
      }
      drawMeteors(dt);

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
