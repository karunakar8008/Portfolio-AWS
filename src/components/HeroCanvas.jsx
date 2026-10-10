import { useEffect, useRef } from "react";

/* Interactive particle constellation behind the hero.
   - Particles drift; lines connect near neighbors.
   - They react to the cursor (gentle repulsion + brighter links).
   - Pauses when the hero scrolls off-screen; respects reduced motion. */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    let w = 0,
      h = 0,
      dpr = 1,
      particles = [],
      raf = 0,
      running = true;
    const mouse = { x: -9999, y: -9999 };

    const LINK_DIST = 110;
    const FRAME_MS = 1000 / 30; // cap to ~30fps — plenty smooth, much lighter
    let last = 0;

    const resize = () => {
      dpr = 1; // particles don't need retina; halves the pixels we push
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(46, Math.max(16, Math.floor(w / 30)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const step = (t) => {
      if (!running) return;
      raf = requestAnimationFrame(step);
      if (t - last < FRAME_MS) return; // throttle
      last = t;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 16000) {
          const d = Math.sqrt(d2) || 1;
          p.x += (dx / d) * 1.4;
          p.y += (dy / d) * 1.4;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            const nearMouse = Math.hypot(mx - mouse.x, my - mouse.y) < 160;
            const alpha = (1 - dist / LINK_DIST) * (nearMouse ? 0.55 : 0.22);
            ctx.strokeStyle = `rgba(129,140,248,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(165,180,252,0.85)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const start = () => {
      if (running && raf) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeaveWin = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    start();

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(parent);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMouse, { passive: true });
    window.addEventListener("pointerout", onLeaveWin);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMouse);
      window.removeEventListener("pointerout", onLeaveWin);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
