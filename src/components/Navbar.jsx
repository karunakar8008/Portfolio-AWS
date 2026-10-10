import { useState } from "react";
import { profile } from "../data/content";
import { useScrolled, useScrollSpy } from "../hooks";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons";

const links = [
  { label: "Summary", href: "#summary" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = links.map((l) => l.href.slice(1));

export default function Navbar({ theme, onToggleTheme }) {
  const scrolled = useScrolled(20);
  const active = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          {initials}
          <span>.</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="nav-toggle theme-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
