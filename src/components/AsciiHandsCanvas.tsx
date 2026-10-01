import React, { useRef, useEffect, useCallback } from 'react';
import {
  ASCII_HANDS_WIDTH,
  ASCII_HANDS_HEIGHT,
  ASCII_HANDS_GLYPHS,
  type AsciiGlyph,
} from '../data/asciiHandsData';

interface ParticleGlyph extends AsciiGlyph {
  origX: number;
  origY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  displayChar: string;
  charTimer: number;
}

interface Spark {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const AsciiHandsCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const glyphsRef = useRef<ParticleGlyph[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const animFrameRef = useRef<number | null>(null);

  // Landmark coordinates for spark energy lines
  const robotFingertip = { x: 275, y: 74 };
  const humanFingertip = { x: 480, y: 112 };
  const symbolCenter = { x: 365, y: 110 };

  // Character scramble pools for continuous dynamic decoding animation
  const robotPool = ['0', '1', 'x', '{', '}', '<', '>', '/', '#', '%', '!', '&', '1', '0', '$', '*'];
  const humanPool = ['.', ':', '*', '~', '=', '+', '^', '"', '-', '°', '·', '•'];
  const symbolPool = ['λ', 'θ', '✦', '✧', '★', '◇', '◆', '+', '*', '∞'];

  // Initialize particles from pure TypeScript data
  useEffect(() => {
    glyphsRef.current = ASCII_HANDS_GLYPHS.map((g) => ({
      ...g,
      origX: g.x,
      origY: g.y,
      displayChar: g.char,
      charTimer: 0,
      vx: 0,
      vy: 0,
    }));
  }, []);

  // Responsive full-bleed canvas setup matching viewport
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

    const clientW = rect.width;
    const clientH = rect.width * (ASCII_HANDS_HEIGHT / ASCII_HANDS_WIDTH);

    canvas.width = Math.round(clientW * dpr);
    canvas.height = Math.round(clientH * dpr);

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(
        (clientW / ASCII_HANDS_WIDTH) * dpr,
        (clientH / ASCII_HANDS_HEIGHT) * dpr
      );
    }
  }, []);

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      observer = new ResizeObserver(() => {
        updateCanvasSize();
      });
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      observer?.disconnect();
    };
  }, [updateCanvasSize]);

  // Main Render Loop: Pure procedural colored ASCII characters
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastSparkTime = 0;
    let pulseAngle = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, ASCII_HANDS_WIDTH, ASCII_HANDS_HEIGHT);

      pulseAngle += 0.009;
      const mouse = mouseRef.current;
      const symbolGlow = 1 + Math.sin(pulseAngle) * 0.12;

      // 1. Spawning energy sparks between fingertips and central symbol
      if (time - lastSparkTime > 550) {
        lastSparkTime = time;
        if (Math.random() > 0.45) {
          // Robot fingertip -> Central Symbol
          sparksRef.current.push({
            x: robotFingertip.x + (Math.random() - 0.5) * 4,
            y: robotFingertip.y + (Math.random() - 0.5) * 4,
            targetX: symbolCenter.x + (Math.random() - 0.5) * 14,
            targetY: symbolCenter.y + (Math.random() - 0.5) * 14,
            progress: 0,
            speed: 0.007 + Math.random() * 0.005,
            color: 'rgba(255, 255, 255, 0.95)',
            size: 1.2 + Math.random() * 0.8,
          });
        }
        if (Math.random() > 0.45) {
          // Human fingertip -> Central Symbol
          sparksRef.current.push({
            x: humanFingertip.x + (Math.random() - 0.5) * 4,
            y: humanFingertip.y + (Math.random() - 0.5) * 4,
            targetX: symbolCenter.x + (Math.random() - 0.5) * 14,
            targetY: symbolCenter.y + (Math.random() - 0.5) * 14,
            progress: 0,
            speed: 0.007 + Math.random() * 0.005,
            color: 'rgba(255, 225, 200, 0.95)',
            size: 1.2 + Math.random() * 0.8,
          });
        }
      }

      // Configure crisp non-overlapping monospace text rendering
      ctx.font = 'bold 7px "JetBrains Mono", Consolas, "Courier New", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const glyphs = glyphsRef.current;
      const hoverRadius = 75;

      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];

        let brightnessBoost = 0;

        // Continuous ambient ASCII character decoding across the entire artwork (calm, cinematic pace)
        if (g.cat === 0) {
          // Robot hand: subtle matrix stream
          if (Math.random() < 0.003) {
            g.displayChar = robotPool[Math.floor(Math.random() * robotPool.length)];
            g.charTimer = 35 + Math.floor(Math.random() * 40);
          }
        } else if (g.cat === 1) {
          // Central symbol: slow sacred glyph rotation
          if (Math.random() < 0.005) {
            g.displayChar = symbolPool[Math.floor(Math.random() * symbolPool.length)];
            g.charTimer = 45 + Math.floor(Math.random() * 50);
          }
        } else if (g.cat === 2) {
          // Human hand: subtle organic stipple shift
          if (Math.random() < 0.0018) {
            g.displayChar = humanPool[Math.floor(Math.random() * humanPool.length)];
            g.charTimer = 40 + Math.floor(Math.random() * 45);
          }
        }

        // Countdown timer to return to base character
        if (g.charTimer > 0) {
          g.charTimer--;
          if (g.charTimer === 0) g.displayChar = g.char;
        }

        // Mouse hover proximity: character decoding + illumination without positional overlap
        if (mouse.active) {
          const dx = g.origX - mouse.x;
          const dy = g.origY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius && dist > 0) {
            const proximity = 1 - dist / hoverRadius;
            brightnessBoost = proximity * 65;

            // Controlled smooth scrambling under cursor
            if (dist < 38 && Math.random() < 0.18) {
              const pool = g.cat === 0 ? robotPool : g.cat === 1 ? symbolPool : humanPool;
              g.displayChar = pool[Math.floor(Math.random() * pool.length)];
              g.charTimer = 16;
            }
          }
        }

        // Color calculation
        let r = g.r + brightnessBoost;
        let green = g.g + brightnessBoost;
        let b = g.b + brightnessBoost;

        if (g.cat === 1) {
          // Central Symbol: gentle breathing luminescence
          r = Math.min(255, r * symbolGlow);
          green = Math.min(255, green * symbolGlow);
          b = Math.min(255, b * symbolGlow);
        }

        ctx.fillStyle = `rgb(${Math.min(255, Math.round(r))}, ${Math.min(
          255,
          Math.round(green)
        )}, ${Math.min(255, Math.round(b))})`;

        // Draw pure code character directly at locked grid position
        ctx.fillText(g.displayChar, g.origX, g.origY);
      }

      // Render sparks
      for (let s = sparksRef.current.length - 1; s >= 0; s--) {
        const spark = sparksRef.current[s];
        spark.progress += spark.speed;

        if (spark.progress >= 1) {
          // Spark impact burst: ripple characters around target
          for (let k = 0; k < glyphs.length; k++) {
            const g = glyphs[k];
            const dx = g.origX - spark.targetX;
            const dy = g.origY - spark.targetY;
            if (dx * dx + dy * dy < 600) {
              g.displayChar = symbolPool[Math.floor(Math.random() * symbolPool.length)];
              g.charTimer = 18;
            }
          }
          sparksRef.current.splice(s, 1);
          continue;
        }

        const currX = spark.x + (spark.targetX - spark.x) * spark.progress;
        const currY =
          spark.y +
          (spark.targetY - spark.y) * spark.progress +
          Math.sin(spark.progress * Math.PI) * -6;

        ctx.beginPath();
        ctx.arc(currX, currY, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Handle Mouse movement relative to 736 x 266 virtual canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = ASCII_HANDS_WIDTH / rect.width;
    const scaleY = ASCII_HANDS_HEIGHT / rect.height;

    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  // Handle Touch interactions for mobile devices
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !e.touches[0]) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = ASCII_HANDS_WIDTH / rect.width;
    const scaleY = ASCII_HANDS_HEIGHT / rect.height;

    mouseRef.current = {
      x: (e.touches[0].clientX - rect.left) * scaleX,
      y: (e.touches[0].clientY - rect.top) * scaleY,
      active: true,
    };
  };

  const handleTouchEnd = () => {
    mouseRef.current.active = false;
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden select-none flex flex-col items-center cursor-crosshair touch-none"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[650px] h-96 sm:h-[650px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none -z-0" />

      {/* Pure Procedural Code Canvas (Zero Image Files, 100% Native Code) */}
      <div className="relative w-full aspect-[736/266] overflow-visible">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{
            imageRendering: 'crisp-edges',
          }}
        />
      </div>
    </div>
  );
};
