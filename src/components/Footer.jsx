import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Built with <span className="font-mono">React + Vite</span> ·{" "}
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
