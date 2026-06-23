import { useEffect, useRef } from "react";

interface Particle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

/**
 * Interactive particle field that forms the word "UNAVOLTAVEVOLABARBA" and reacts to the
 * cursor — an homage to phantom.land's WebGL hero, built with 2D canvas.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cw = 0, ch = 0;

    const build = () => {
      cw = canvas.clientWidth;
      ch = canvas.clientHeight;
      const w = cw, h = ch;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Sample text into an offscreen canvas to derive particle targets.
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const octx = off.getContext("2d");
      if (!octx) return;

      const text = "UNAVOLTAVEVOLABARBA";
      let fontSize = Math.min(w / 5.2, 220);
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.font = `700 ${fontSize}px "Space Mono", monospace`;
      // Scale down if text is too wide for the canvas
      const metrics = octx.measureText(text);
      const targetWidth = w * 0.85;
      if (metrics.width > targetWidth) {
        fontSize = fontSize * (targetWidth / metrics.width);
        octx.font = `700 ${fontSize}px "Space Mono", monospace`;
      }
      octx.fillText(text, w / 2, h / 2);

      const img = octx.getImageData(0, 0, w, h).data;
      const gap = Math.max(4, Math.round(w / 320));
      const next: Particle[] = [];
      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          const alpha = img[(y * w + x) * 4 + 3];
          if (alpha > 128) {
            next.push({
              ox: x,
              oy: y,
              x: Math.random() * w,
              y: Math.random() * h,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.4 + 0.6,
            });
          }
        }
      }
      particles = next;
    };

    const RADIUS = 120;
    const radiusSq = RADIUS * RADIUS;
    const lightCache = Array.from({ length: 31 }, (_, i) => `hsl(0 0% ${70 + i}%)`);

    const tick = () => {
      const w = cw, h = ch;
      ctx.clearRect(0, 0, w, h);
      const px = pointer.current.x;
      const py = pointer.current.y;

      for (const p of particles) {
        // attraction to origin
        const dxo = p.ox - p.x;
        const dyo = p.oy - p.y;
        p.vx += dxo * 0.02;
        p.vy += dyo * 0.02;

        // repulsion from pointer
        const dx = p.x - px;
        const dy = p.y - py;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < radiusSq) {
          const dist = Math.sqrt(dist2) || 1;
          const force = (RADIUS - dist) / RADIUS;
          p.vx += (dx / dist) * force * 6;
          p.vy += (dy / dist) * force * 6;
        }

        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;

        const speed = Math.min(1, (Math.abs(p.vx) + Math.abs(p.vy)) / 8);
        ctx.fillStyle = lightCache[Math.round(speed * 30)];
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      raf = requestAnimationFrame(tick);
    };

    build();
    tick();

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => (pointer.current = { x: -9999, y: -9999 });

    window.addEventListener("resize", build);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden />;
}
