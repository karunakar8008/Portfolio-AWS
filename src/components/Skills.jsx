import { useState } from "react";
import { useReveal } from "../hooks";
import { coreCompetencies, skillGroups } from "../data/content";
import SectionHead from "./SectionHead";

// Self-assessment level → bar fill. Edit in content.js via each item's `level`.
const LEVEL_PCT = { Expert: 95, Advanced: 80, Proficient: 65 };

function CompetencyBar({ name, level, visible, index }) {
  const pct = LEVEL_PCT[level] ?? 70;
  return (
    <div className="competency">
      <div className="competency-head">
        <span className="competency-name">{name}</span>
        <span className="competency-level">{level}</span>
      </div>
      <div className="competency-track" role="img" aria-label={`${name}: ${level}`}>
        <div
          className="competency-fill"
          style={{
            width: visible ? `${pct}%` : "0%",
            transitionDelay: `${index * 90}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();
  const categories = ["All", ...skillGroups.map((g) => g.category)];
  const [active, setActive] = useState("All");

  const shown =
    active === "All" ? skillGroups : skillGroups.filter((g) => g.category === active);

  return (
    <section id="skills">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead
          eyebrow="02 · Skills"
          title="Technical skills"
          lead="Core competencies, plus the full toolset I work with across the stack."
        />

        <div className="skills-layout">
          {/* Animated proficiency bars */}
          <div className="competencies">
            <h3 className="skills-subhead">Core competencies</h3>
            {coreCompetencies.map((c, i) => (
              <CompetencyBar key={c.name} {...c} visible={visible} index={i} />
            ))}
            <p className="competency-note">Self-assessed proficiency.</p>
          </div>

          {/* Filterable skill inventory */}
          <div className="skill-explorer">
            <h3 className="skills-subhead">Full toolset</h3>
            <div className="skill-filters">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter-btn ${active === c ? "active" : ""}`}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="skill-groups">
              {shown.map((g) => (
                <div className="skill-group" key={g.category}>
                  <h4>{g.category}</h4>
                  <div className="skill-tags">
                    {g.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
