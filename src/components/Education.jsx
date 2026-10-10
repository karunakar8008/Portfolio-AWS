import { useReveal } from "../hooks";
import { education } from "../data/content";
import { GradCapIcon, LocationIcon } from "./Icons";
import SectionHead from "./SectionHead";

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead eyebrow="07 · Education" title="Education" />

        <div className="edu-grid stagger">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">
                <GradCapIcon width={26} height={26} />
              </div>
              <div className="edu-body">
                <h3>{e.degree}</h3>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta">
                  <span>
                    <LocationIcon width={14} height={14} /> {e.location}
                  </span>
                  <span className="edu-year">{e.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
