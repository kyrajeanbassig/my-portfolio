import { useEffect, useRef } from 'react'
import { MapPin, Calendar, Award } from 'lucide-react'

// ── EDIT THIS ARRAY as you gain more work experience — just add another object
const EXPERIENCE = [
  {
    role: 'Web Development Intern',
    company: 'ViewQwest Philippines, Inc.',
    location: 'Malolos, Bulacan',
    period: 'January 2026 – April 2026',
    bullets: [
      'Built React.js + Tailwind CSS frontend pages, improving UI consistency across modules.',
      'Integrated Laravel APIs with MySQL for dynamic data rendering.',
      'Tested APIs via Postman, identifying 10+ endpoint issues during QA.',
      'Developed dashboard features and CRUD operations for data management.',
      'Implemented CSV import/export for bulk data handling.',
      'Fixed bugs and managed version control using Git/GitHub.',
    ],
    tags: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'Postman', 'Git/GitHub'],
  },
]

// ── EDIT with any new certifications you earn
const CERTIFICATIONS = [
  {
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Office 2019',
    date: 'May 2023',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'December 2025',
  },
]

export default function Experience() {
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
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Experience &amp; Certifications</h2>
          <p className="section-sub">
            Hands-on experience from my internship, plus certifications that back up my skills.
          </p>
        </div>

        {/* Work Experience */}
        <div className="exp-list">
          {EXPERIENCE.map(({ role, company, location, period, bullets, tags }, i) => (
            <div
              className="exp-card reveal"
              key={company}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="exp-card__header">
                <div>
                  <h3 className="exp-card__role">{role}</h3>
                  <div className="exp-card__company">{company}</div>
                </div>
                <div className="exp-card__meta">
                  <span><Calendar size={14} /> {period}</span>
                  <span><MapPin size={14} /> {location}</span>
                </div>
              </div>

              <ul className="exp-card__bullets">
                {bullets.map(b => <li key={b}>{b}</li>)}
              </ul>

              <div className="exp-card__tags">
                {tags.map(tag => (
                  <span key={tag} className="exp-card__tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="cert-header reveal">
          <Award size={20} />
          <h3>Certifications</h3>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map(({ title, issuer, date }, i) => (
            <div
              className="cert-card reveal"
              key={title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cert-card__title">{title}</div>
              <div className="cert-card__issuer">{issuer}</div>
              <div className="cert-card__date">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}