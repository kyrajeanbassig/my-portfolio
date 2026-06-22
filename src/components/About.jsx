import { useEffect, useRef } from "react";
import { User } from "lucide-react";

// ── Once you send over your photo, drop it in /public/profile.jpg (same file as Hero)
const PHOTO_URL = "/profile2.jpg";

const FACTS = [
  { icon: "🎓", label: "Education", value: "BSIT, Cum Laude — 2026" },
  { icon: "📍", label: "Location", value: "Hagonoy, Bulacan" },
  { icon: "💼", label: "Status", value: "Open to work" },
  { icon: "⚡", label: "Specialty", value: "Full-Stack Development" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) el.target.classList.add("visible");
        });
      },
      { threshold: 0.15 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container about__inner">
        {/* Left: Text */}
        <div>
          <div className="reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Who I Am</h2>
          </div>

          <div
            className="about__text reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <p>
              I'm <strong>Kyra Jean Bassig</strong>, a Cum Laude BSIT graduate
              from La Consolacion University Philippines with hands-on
              experience building full-stack web applications using React,
              Laravel, PHP, and MySQL.
            </p>
            <p>
              As a Web Development Intern at ViewQwest Philippines, I built
              React and Tailwind CSS frontend pages, integrated Laravel APIs
              with MySQL for dynamic data rendering, and tested endpoints in
              Postman — catching 10+ issues during QA. I also worked on
              dashboard features, CRUD operations, and CSV import/export, while
              managing version control with Git and GitHub.
            </p>
            <p>
              I'm detail-oriented, a fast learner, and comfortable working in an
              Agile/Scrum setup. I'm currently looking for a junior developer or
              IT role where I can keep contributing and growing.
            </p>
          </div>

          {/* Quick Facts */}
          <div
            className="about__facts reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            {FACTS.map(({ icon, label, value }) => (
              <div key={label} className="about__fact">
                <div className="about__fact-icon">{icon}</div>
                <div className="about__fact-label">{label}</div>
                <div className="about__fact-value">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className="about__image-wrap reveal"
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="about__image-box">
            {PHOTO_URL ? (
              <img src={PHOTO_URL} alt="Kyra Jean Bassig" />
            ) : (
              <div className="about__image-placeholder">
                <User size={64} strokeWidth={1} />
                <span>Your photo here</span>
              </div>
            )}
          </div>
          <div className="about__deco" />
        </div>
      </div>
    </section>
  );
}
