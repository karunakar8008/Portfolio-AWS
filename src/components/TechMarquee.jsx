import { skillGroups } from "../data/content";

// A curated, de-duplicated set of technologies for the scrolling strip.
const ALL = Array.from(new Set(skillGroups.flatMap((g) => g.items)));
const mid = Math.ceil(ALL.length / 2);
const rowA = ALL.slice(0, mid);
const rowB = ALL.slice(mid);

function Row({ items, reverse }) {
  // Duplicated once so the CSS loop is seamless.
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="marquee-section" aria-label="Technologies">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </section>
  );
}
