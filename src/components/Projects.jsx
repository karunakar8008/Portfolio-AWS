import { useMemo, useState } from "react";
import { useReveal } from "../hooks";
import { projects } from "../data/content";
import { CodeIcon } from "./Icons";
import SectionHead from "./SectionHead";

export default function Projects() {
  const { ref, visible } = useReveal();

  const domains = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.domain)))],
    []
  );
  const [active, setActive] = useState("All");

  const shown =
    active === "All" ? projects : projects.filter((p) => p.domain === active);

  return (
    <section id="projects">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead
          eyebrow="05 · Client work"
          title="Client projects"
          lead="Enterprise engagements across my career. Filter by industry domain."
        />

        <div className="skill-filters">
          {domains.map((d) => (
            <button
              key={d}
              className={`filter-btn ${active === d ? "active" : ""}`}
              onClick={() => setActive(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="projects-grid stagger">
          {shown.map((p) => (
            <article
              key={p.title}
              className={`project-card ${p.featured ? "featured" : ""}`}
            >
              <div className="project-top">
                <CodeIcon className="project-icon" />
                <span className="tag domain-tag">{p.domain}</span>
              </div>
              <h3>{p.title}</h3>
              <div className="project-client">{p.client}</div>
              <p className="project-desc">{p.description}</p>

              <ul className="project-highlights">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="project-tags">
                {p.tech.map((t) => (
                  <span className="tag tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
