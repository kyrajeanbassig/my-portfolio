import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  User,
} from "lucide-react";

// ── Once you send over your photo, drop the file in /public/profile.jpg
// ── then change PHOTO_URL below to "/profile.jpg"
const PHOTO_URL = "/profile.jpg";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/YOUR_USERNAME", label: "GitHub" }, // TODO: add your GitHub
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/kyrajeanbassig04",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kyrajean64@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="hero__glow-2" />
      </div>

      <div className="container hero__inner">
        {/* Left: Text Content */}
        <div className="hero__content">
          {/* Status badge */}
          <div className="hero__greeting">
            <span className="hero__greeting-dot" />
            Open to work
          </div>

          {/* Name */}
          <h1 className="hero__name">
            Hi, I'm <span className="hero__name-gradient">Kyra Jean</span>
          </h1>

          {/* Title */}
          <p className="hero__title">
            <span>BSIT Graduate, Cum Laude</span> · Full-Stack Developer
          </p>

          {/* Description */}
          <p className="hero__desc">
            I build full-stack web applications with React, Laravel, and MySQL.
            During my internship at ViewQwest Philippines, I shipped dashboard
            features, integrated REST APIs, and helped keep the UI consistent
            across a growing codebase. Now looking for a junior developer role
            where I can keep building and learning.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta">
            <a href="#contact" className="btn btn-primary">
              Get in touch <ArrowRight size={16} />
            </a>
            <a
              href="/Kyra_Jean_Bassig_CV.pdf"
              download
              className="btn btn-outline"
            >
              Download CV <Download size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__social">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="hero__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Profile Photo */}
        <div className="hero__image-wrap">
          <div className="hero__image-frame">
            {PHOTO_URL ? (
              <img
                src={PHOTO_URL}
                alt="Kyra Jean Bassig"
                className="hero__image"
              />
            ) : (
              <div className="hero__image-placeholder">
                <User size={56} strokeWidth={1} />
                <p>ADD PHOTO</p>
                <p style={{ fontSize: "0.72rem" }}>
                  Put your photo in /public/profile.jpg
                </p>
                <p style={{ fontSize: "0.72rem" }}>
                  then set PHOTO_URL = "/profile.jpg"
                </p>
              </div>
            )}

            {/* Floating badge */}
            <div className="hero__badge">
              <span className="hero__badge-icon">💻</span>
              <div>
                <div className="hero__badge-text">Full-Stack Developer</div>
                <div className="hero__badge-sub">React · Laravel · MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
