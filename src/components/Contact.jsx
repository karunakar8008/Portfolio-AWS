import { useReveal } from "../hooks";
import { contact, profile, socials } from "../data/content";
import { MailIcon, PhoneIcon, SparklesIcon, SocialIcon } from "./Icons";
import SectionHead from "./SectionHead";

export default function Contact({ onOpenChat }) {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="contact">
      <div ref={ref} className={`container reveal ${visible ? "visible" : ""}`}>
        <SectionHead eyebrow="08 · Contact" title={contact.heading} center />

        <p className="blurb">{contact.blurb}</p>

        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <MailIcon /> {profile.email}
          </a>
          {profile.phone && (
            <a href={`tel:${profile.phone}`} className="btn btn-ghost">
              <PhoneIcon /> {profile.phone}
            </a>
          )}
          <button className="btn btn-accent-soft" onClick={onOpenChat}>
            <SparklesIcon width={18} height={18} /> Ask my AI assistant
          </button>
        </div>

        <div className="contact-socials">
          {socials
            .filter((s) => s.icon !== "mail")
            .map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
