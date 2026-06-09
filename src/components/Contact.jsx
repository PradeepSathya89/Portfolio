import './Contact.css'

const links = [
  { icon: '📧', label: 'kunabathulapradeepsathya@gmail.com', href: 'mailto:kunabathulapradeepsathya@gmail.com' },
  { icon: '📞', label: '8897541279', href: 'tel:8897541279' },
  { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/pradeep-sathya-kunabthula-075021274' },
  { icon: '⌥', label: 'GitHub', href: 'https://github.com/PradeepSathya89' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-tag">Let's Connect</div>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <p>I'm actively seeking full-time Frontend Developer roles. If you're looking for a motivated developer ready to contribute from day one, let's connect!</p>
        <div className="contact-links">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
        <a href="https://pradeepsathya89.vercel.app" className="btn-primary" target="_blank" rel="noreferrer">
          🌐 Visit Portfolio Live
        </a>
      </div>
    </section>
  )
}
