import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL = [
  { icon: Github, href: "https://github.com/YOUR_USERNAME", label: "GitHub" }, // TODO: add your GitHub
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kyrajeanbassig04",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kyrajean64@gmail.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} <a href="#home">Kyra Jean Bassig</a>. All rights reserved.
        </p>

        <div className="footer__links">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
