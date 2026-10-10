import AnimatedText from "./AnimatedText";

/* Consistent section header with a word-by-word animated title and lead. */
export default function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className="section-head" style={center ? { textAlign: "center", margin: "0 auto 44px" } : undefined}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">
        <AnimatedText text={title} />
      </h2>
      {lead && (
        <p>
          <AnimatedText text={lead} step={0.012} />
        </p>
      )}
    </div>
  );
}
