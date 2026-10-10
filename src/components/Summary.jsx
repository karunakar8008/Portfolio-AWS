import { useReveal, useCountUp } from "../hooks";
import { summary } from "../data/content";
import { CheckBadgeIcon } from "./Icons";
import SectionHead from "./SectionHead";

function StatCounter({ value, suffix, label, start }) {
  const n = useCountUp(value, start);
  return (
    <div className="summary-stat">
      <div className="value">
        {n}
        {suffix}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default function Summary() {
  const { ref, visible } = useReveal();

  return (
    <section id="summary">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead eyebrow="01 · Overview" title={summary.heading} lead={summary.lead} />

        <div className="summary-stats stagger">
          {summary.stats.map((s) => (
            <StatCounter key={s.label} {...s} start={visible} />
          ))}
        </div>

        <div className="summary-highlights stagger">
          {summary.highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <CheckBadgeIcon className="highlight-icon" width={22} height={22} />
              <p>{h}</p>
            </div>
          ))}
        </div>

        <div className="summary-domains">
          <span className="domains-label">Domains:</span>
          {summary.domains.map((d) => (
            <span className="tag" key={d}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
