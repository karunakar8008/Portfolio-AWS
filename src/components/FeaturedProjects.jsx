import { useReveal } from "../hooks";
import { featuredProjects } from "../data/content";
import { TiltCard } from "./Motion";
import { SparklesIcon } from "./Icons";
import SectionHead from "./SectionHead";

export default function FeaturedProjects() {
  const { ref, visible } = useReveal();

  return (
    <section id="featured" className="featured">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead
          eyebrow="04 · Featured work"
          title="Things I've built"
          lead="Hands-on projects I architected and built end-to-end — beyond client deliverables."
        />

        <div className="featured-grid stagger">
          {featuredProjects.map((p) => (
            <TiltCard key={p.title} className="featured-card">
              <div className="featured-glow" />
              <div className="featured-inner">
                <div className="featured-top">
                  <span className="featured-tagline">
                    <SparklesIcon width={14} height={14} /> {p.tagline}
                  </span>
                  <span className="featured-status">{p.status}</span>
                </div>

                <h3>{p.title}</h3>
                <p className="featured-desc">{p.description}</p>

                <ul className="featured-highlights">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="featured-tags">
                  {p.tech.map((t) => (
                    <span className="tag tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
