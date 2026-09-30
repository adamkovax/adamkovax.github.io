import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
}

interface Star {
  x: number;
  y: number;
  radius: number;
  phase: number;
  twinkleSpeed: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
}

const PARTICLE_COUNT_DESKTOP = 55;
const PARTICLE_COUNT_MOBILE = 28;
const STAR_COUNT_DESKTOP = 90;
const STAR_COUNT_MOBILE = 45;
const LINK_DISTANCE = 150;
const SPEED = 0.12;
const TWINKLE_SPEED_MIN = 0.0006;
const TWINKLE_SPEED_MAX = 0.0016;
const COMET_MIN_DELAY_MS = 9000;
const COMET_MAX_DELAY_MS = 20000;
const COMET_SPEED = 6.5;
const COMET_TRAIL_LENGTH = 18;

function hexToRgb(hex: string) {
  const clean = hex.trim().replace("#", "");
  const value = parseInt(clean, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const primaryVar = getComputedStyle(document.documentElement).getPropertyValue("--primary");
    const { r, g, b } = hexToRgb(primaryVar || "#10e5a0");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let stars: Star[] = [];
    let comet: Comet | null = null;
    let nextCometAt = 0;
    let rafId: number | null = null;
    let running = false;
    let intersecting = true;

    function scheduleNextComet(now: number) {
      nextCometAt =
        now + COMET_MIN_DELAY_MS + Math.random() * (COMET_MAX_DELAY_MS - COMET_MIN_DELAY_MS);
    }

    function spawnComet() {
      const fromLeft = Math.random() > 0.5;
      const startY = Math.random() * height * 0.6;
      const angle = Math.PI / 5 + Math.random() * (Math.PI / 8);
      const dir = fromLeft ? 1 : -1;
      comet = {
        x: fromLeft ? -20 : width + 20,
        y: startY,
        vx: Math.cos(angle) * COMET_SPEED * dir,
        vy: Math.sin(angle) * COMET_SPEED,
        trail: [],
      };
    }

    function createField() {
      const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        phase: Math.random() * Math.PI * 2,
      }));

      const starCount = width < 768 ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.5 + Math.random() * 1,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: TWINKLE_SPEED_MIN + Math.random() * (TWINKLE_SPEED_MAX - TWINKLE_SPEED_MIN),
      }));
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      createField();
    }

    function drawFrame(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // háttér csillagréteg — halvány, pislákoló
      for (const s of stars) {
        const twinkle = 0.35 + 0.35 * Math.sin(time * s.twinkleSpeed + s.phase);
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0.08, twinkle * 0.5)})`;
        ctx!.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      // összekötő vonalak a közeli pontok közt
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const opacity = (1 - dist / LINK_DISTANCE) * 0.45;
            ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // fő részecskék, finom pislákolással
      for (const p of particles) {
        const twinkle = 0.75 + 0.25 * Math.sin(time * 0.0012 + p.phase);
        ctx!.beginPath();
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.9 * twinkle})`;
        ctx!.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;

      // ritka hullócsillag
      if (comet) {
        for (let k = 0; k < comet.trail.length; k++) {
          const t = comet.trail[k];
          const trailOpacity = ((k + 1) / comet.trail.length) * 0.5;
          ctx!.beginPath();
          ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity})`;
          ctx!.arc(t.x, t.y, 1.2, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.beginPath();
        ctx!.shadowBlur = 12;
        ctx!.shadowColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
        ctx!.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx!.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }
    }

    function updateComet(now: number) {
      if (!comet && now >= nextCometAt) {
        spawnComet();
      }
      if (comet) {
        comet.trail.push({ x: comet.x, y: comet.y });
        if (comet.trail.length > COMET_TRAIL_LENGTH) comet.trail.shift();
        comet.x += comet.vx;
        comet.y += comet.vy;
        const offscreen = comet.x < -40 || comet.x > width + 40 || comet.y > height + 40;
        if (offscreen) {
          comet = null;
          scheduleNextComet(now);
        }
      }
    }

    function tick(time: number) {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      updateComet(time);
      drawFrame(time);
      rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (running || prefersReducedMotion) return;
      running = true;
      scheduleNextComet(performance.now());
      rafId = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function updateRunning() {
      const shouldRun = intersecting && document.visibilityState === "visible";
      if (shouldRun) start();
      else stop();
    }

    resize();
    drawFrame(0);
    updateRunning();

    const handleResize = () => {
      resize();
      drawFrame(performance.now());
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", updateRunning);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          intersecting = entry.isIntersecting;
          updateRunning();
        },
        { threshold: 0 },
      );
      observer.observe(canvas);
    }

    return () => {
      stop();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", updateRunning);
      observer?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
