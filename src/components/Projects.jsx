import { useEffect, useRef } from 'react'
import { Github, ExternalLink, FolderOpen } from 'lucide-react'

// ── EDIT THIS ARRAY with your real projects
// ── image: put screenshots in /public/projects/ folder, e.g. "/projects/budget-app.png"
const PROJECTS = [
  {
    number: '01',
    title: 'Personal Budget Tracker',
    description:
      'A full CRUD web app that lets users track income and expenses, view balance summaries, and manage monthly budgets. Data persists using localStorage.',
    tags: ['React', 'JavaScript', 'CSS3', 'localStorage'],
    image: null,                       // e.g. "/projects/budget-tracker.png"
    github: 'https://github.com/YOUR_USERNAME/budget-tracker',
    live: 'https://your-budget-tracker.vercel.app',
  },
  {
    number: '02',
    title: 'Weather App',
    description:
      'A weather forecast app that fetches real-time weather data from the OpenWeatherMap API. Search any city and see current conditions and temperature.',
    tags: ['React', 'REST API', 'OpenWeatherMap', 'Axios'],
    image: null,
    github: 'https://github.com/YOUR_USERNAME/weather-app',
    live: 'https://your-weather-app.vercel.app',
  },
  {
    number: '03',
    title: 'Portfolio Website',
    description:
      'This portfolio — built with React and Vite, featuring responsive design, CSS animations, and a working contact form. Deployed on Vercel.',
    tags: ['React', 'Vite', 'CSS3', 'EmailJS', 'Vercel'],
    image: null,
    github: 'https://github.com/YOUR_USERNAME/portfolio',
    live: 'https://your-portfolio.vercel.app',
  },
]

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className="projects__header reveal">
          <div>
            <p className="section-label">My Work</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-sub">
              Here are some projects I've built. Click the links to view source code or live demos.
            </p>
          </div>
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ flexShrink: 0 }}
          >
            <Github size={16} /> View GitHub
          </a>
        </div>

        <div className="projects__grid">
          {PROJECTS.map(({ number, title, description, tags, image, github, live }, i) => (
            <div
              className="project-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Image / Placeholder */}
              <div className="project-card__image">
                <span className="project-card__number">{number}</span>
                {image ? (
                  <img src={image} alt={title} />
                ) : (
                  <div className="project-card__image-placeholder">
                    <FolderOpen size={40} strokeWidth={1.2} color="var(--text-dim)" />
                    <span>Add screenshot</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>

                <div className="project-card__tags">
                  {tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
