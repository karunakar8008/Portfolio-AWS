import { useReveal } from "../hooks";

/* Reveals text word-by-word as it scrolls into view (like the hero's dynamic text).
   Renders accessible text (aria-label) with per-word animated spans. */
export default function AnimatedText({ text, className = "", step = 0.045, as: Tag = "span" }) {
  const { ref, visible } = useReveal(0.2);
  const words = String(text).split(" ");
  return (
    <Tag ref={ref} className={`anim-words ${visible ? "visible" : ""} ${className}`} aria-label={text}>
      {words.map((w, i) => (
        <span className="aw" key={i} aria-hidden="true" style={{ transitionDelay: `${i * step}s` }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
