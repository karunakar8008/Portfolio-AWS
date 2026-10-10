import { useState } from "react";
import { useReveal } from "../hooks";
import { experience } from "../data/content";
import { ChevronDownIcon, LocationIcon } from "./Icons";
import SectionHead from "./SectionHead";

function monogram(company) {
  return company
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TimelineItem({ job, open, onToggle }) {
  return (
    <div className={`timeline-item ${open ? "open" : ""}`}>
      <div className="timeline-badge">{monogram(job.company)}</div>

      <button className="timeline-card" onClick={onToggle} aria-expanded={open}>
        <div className="timeline-main">
          <div className="timeline-row">
            <h3 className="timeline-role">{job.role}</h3>
            <span className="timeline-period">{job.period}</span>
          </div>
          <div className="timeline-row">
            <span className="timeline-company">{job.company}</span>
            <span className="timeline-loc">
              <LocationIcon width={14} height={14} /> {job.location}
            </span>
          </div>
          <div className="timeline-tagrow">
            <span className="tag domain-tag">{job.domain}</span>
            <span className="timeline-summary">{job.summary}</span>
          </div>
        </div>
        <ChevronDownIcon className="timeline-chevron" />
      </button>

      <div className="timeline-detail" hidden={!open}>
        <ul>
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="timeline-tech">
          {job.tech.map((t) => (
            <span className="tag tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState(0); // first job expanded by default

  return (
    <section id="experience">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead
          eyebrow="03 · Experience"
          title="Work experience"
          lead="12 years across 6 enterprise clients. Click any role to expand the details."
        />

        <div className="timeline stagger">
          {experience.map((job, i) => (
            <TimelineItem
              key={`${job.company}-${i}`}
              job={job}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
