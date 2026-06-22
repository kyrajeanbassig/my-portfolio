import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";

// ────────────────────────────────────────────────────────
//  HOW TO SET UP EmailJS (free, no backend needed):
//  1. Go to https://www.emailjs.com and create a free account
//  2. Add an Email Service (e.g. Gmail)
//  3. Create an Email Template with variables:
//       {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//  4. Copy your Service ID, Template ID, and Public Key
//  5. Run:  npm install @emailjs/browser
//  6. Replace the values below with yours
// ────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "kyrajean64@gmail.com",
    href: "mailto:kyrajean64@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0963 118 7761",
    href: "tel:+639631187761",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hagonoy, Bulacan",
    href: null,
  },
];

const INIT_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INIT_FORM);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
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

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Dynamically import EmailJS so the app still works without it installed
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(INIT_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-sub">
            Have a project in mind or want to hire me? Drop a message below — I
            typically reply within 24 hours.
          </p>
        </div>

        <div className="contact__inner">
          {/* Left: Contact Info */}
          <div className="reveal">
            <p className="contact__info-desc">
              I'm currently open to{" "}
              <strong style={{ color: "var(--text)" }}>full-time</strong>,{" "}
              <strong style={{ color: "var(--text)" }}>freelance</strong>, and{" "}
              <strong style={{ color: "var(--text)" }}>internship</strong>{" "}
              opportunities. Let's build something together!
            </p>

            <div className="contact__items">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="contact__item">
                  <div className="contact__item-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="contact__item-label">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="contact__item-value"
                        style={{ transition: "color 0.2s" }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) => (e.target.style.color = "")}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="contact__item-value">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="contact__form reveal"
            style={{ transitionDelay: "0.15s" }}
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === "success" && (
              <div className="form-status form-status--success">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-status form-status--error">
                ❌ Something went wrong. Please try emailing me directly.
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Loader size={16} className="spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
