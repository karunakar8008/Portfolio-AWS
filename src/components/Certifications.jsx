import { useReveal } from "../hooks";
import { certifications } from "../data/content";
import { CheckBadgeIcon, ExternalIcon } from "./Icons";
import SectionHead from "./SectionHead";

const BADGE_TEXT = { aws: "AWS", azure: "AZ" };

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead
          eyebrow="06 · Certifications"
          title="Certifications"
          lead="Validated cloud development expertise."
        />

        <div className="cert-grid stagger">
          {certifications.map((c) => (
            <div className="cert-card" key={c.name} style={{ "--cert": c.accent }}>
              <div className="cert-badge" style={{ "--badge": c.accent }}>
                <span>{BADGE_TEXT[c.icon] || "✓"}</span>
              </div>
              <div className="cert-body">
                <h3>{c.name}</h3>
                <div className="cert-issuer">
                  <CheckBadgeIcon width={16} height={16} /> {c.issuer}
                </div>
                {c.url && c.url !== "#" && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="cert-verify">
                    <ExternalIcon /> Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
