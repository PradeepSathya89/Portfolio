import { useEffect, useRef } from 'react'
import './About.css'

const cards = [
  { icon: '⚡', title: 'Fast Learner', desc: 'Self-taught frontend developer who picked up React.js, Vite and modern JS through training and hands-on projects.' },
  { icon: '🎯', title: 'Detail Oriented', desc: 'Focused on pixel-perfect UI, responsive layouts, and writing clean, maintainable, reusable code.' },
  { icon: '🚀', title: 'Project-Driven', desc: 'Built 3 real-world projects deployed on Vercel with full source code available on GitHub.' },
  { icon: '🤝', title: 'Team Player', desc: 'Collaborative, adaptable and always eager to learn from experienced developers in a team environment.' },
]

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal-item')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120)
        }
      })
    }, { threshold: 0.1 })
    els?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-text reveal-item">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Passionate about <span>building</span> the web</h2>
          <p>Hi! I'm <strong>Kunabathula Pradeep Sathya</strong>, a Frontend Developer fresher based in <strong>Hyderabad, Telangana</strong>. I transitioned from Civil Engineering to Frontend Development through dedicated self-learning and hands-on training.</p>
          <p>I specialize in building <strong>responsive, clean, and user-friendly interfaces</strong> using React.js, Vite, JavaScript, HTML5, CSS3 and Bootstrap.</p>
          <p>I follow <strong>clean code practices</strong>, build reusable components, and use Git & GitHub for version control.</p>
          <div className="about-highlight">
            "From Civil Engineering to Frontend Development — every line of code is proof that passion beats background."
          </div>
        </div>
        <div className="about-cards">
          {cards.map((c, i) => (
            <div className="about-card reveal-item" key={i}>
              <div className="about-card-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
