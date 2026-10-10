import { useEffect, useRef } from "react";
import { useTilt, useMagnetic } from "../hooks";

/* Wraps children so they magnetically follow the cursor on hover. */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useMagnetic(strength);
  return (
    <span ref={ref} className={`magnetic ${className}`}>
      {children}
    </span>
  );
}

/* Thin accent bar at the very top that fills as you scroll.
   Updates the DOM directly via a ref — no React re-render on scroll. */
export function ScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  );
}

/* Fixed, blurred ambient gradient orbs — static (no per-scroll recompositing). */
export function ParallaxOrbs() {
  return (
    <div className="orbs" aria-hidden="true">
      <span className="orb orb-1" />
      <span className="orb orb-2" />
      <span className="orb orb-3" />
    </div>
  );
}

/* A card that tilts toward the pointer and shows a soft spotlight. */
export function TiltCard({ className = "", children, max = 7, ...rest }) {
  const ref = useTilt(max);
  return (
    <div ref={ref} className={`tilt ${className}`} {...rest}>
      {children}
    </div>
  );
}
