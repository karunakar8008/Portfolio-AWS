import { useEffect, useState } from "react";
import { profile, socials } from "../data/content";
import { SocialIcon, SparklesIcon } from "./Icons";
import HeroCanvas from "./HeroCanvas";
import { Magnetic } from "./Motion";

/* Typing effect that cycles through profile.taglines. */
function useTyping(words, { typeMs = 65, deleteMs = 30, holdMs = 1700 } = {}) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === current) delay = holdMs;
    else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => i + 1);
      delay = 300;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else {
        const next = deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1);
        setText(next);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, idx, words, typeMs, deleteMs, holdMs]);

  return text;
}

const chips = [
  { value: "12+", label: "years" },
  { value: "6", label: "enterprise clients" },
  { value: "2", label: "cloud certs" },
];

export default function Hero({ onOpenChat }) {
  const typed = useTyping(profile.taglines);

  return (
    <header id="top" className="hero">
      <HeroCanvas />
      <div className="container">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <div className="typed">
          {typed}
          <span className="cursor">&nbsp;</span>
        </div>
        <p className="summary">{profile.summary}</p>

        <div className="hero-chips">
          {chips.map((c) => (
            <div className="hero-chip" key={c.label}>
              <strong>{c.value}</strong>
              <span>{c.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <Magnetic>
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
          </Magnetic>
          <Magnetic>
            <button className="btn btn-accent-soft" onClick={onOpenChat}>
              <SparklesIcon width={18} height={18} /> Ask my AI assistant
            </button>
          </Magnetic>
          {profile.resumeUrl && profile.resumeUrl !== "#" && (
            <a
              href={profile.resumeUrl}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
          )}
        </div>

        <div className="hero-socials">
          {socials.map((s) => (
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
    </header>
  );
}
