import { useEffect, useRef } from "react";

const SKILL_CATEGORIES = [
  {
    icon: "🌐",
    title: "Frontend",
    tags: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Node.js"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    tags: ["Laravel", "REST API Integration"],
  },
  {
    icon: "🗄️",
    title: "Database",
    tags: ["MySQL", "Database Handling"],
  },
  {
    icon: "🧰",
    title: "Tools & Testing",
    tags: ["Postman", "Git", "GitHub", "Zuora", "Figma"],
  },
  {
    icon: "📋",
    title: "Development Skills",
    tags: [
      "CRUD Operations",
      "Dashboard Development",
      "CSV Import/Export",
      "Debugging",
      "Agile/Scrum",
    ],
  },
  {
    icon: "🤝",
    title: "Core Competencies",
    tags: [
      "Problem-Solving",
      "Team Collaboration",
      "Time Management",
      "Attention to Detail",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((el) => {
          if (el.isIntersecting) el.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="reveal">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-sub">
            The technologies, tools, and competencies I bring from my coursework
            and internship.
          </p>
        </div>

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ icon, title, tags }, i) => (
            <div
              className="skill-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__icon">{icon}</div>
              <div className="skill-card__title">{title}</div>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
