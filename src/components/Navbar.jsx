import { useEffect, useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(id)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <div className="logo-ring">
          <svg viewBox="0 0 48 48" width="42" height="42" className="logo-svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A90D9"/>
                <stop offset="100%" stopColor="#7BB8F0"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Outer rotating ring */}
            <circle cx="24" cy="24" r="20" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5"
              strokeDasharray="6 3" className="logo-ring-spin"/>
            {/* Inner circle */}
            <circle cx="24" cy="24" r="14" fill="rgba(74,144,217,0.08)" stroke="rgba(74,144,217,0.3)" strokeWidth="1"/>
            {/* PS text */}
            <text x="24" y="29" textAnchor="middle" fill="url(#logoGrad)"
              fontFamily="Syne, sans-serif" fontWeight="800" fontSize="13" filter="url(#glow)">PS</text>
          </svg>
        </div>
        <div className="logo-text">
          <span className="logo-name">Pradeep Sathya</span>
          <span className="logo-title">Frontend Dev</span>
        </div>
      </div>
      <ul className="nav-links">
        {['about', 'skills', 'projects', 'contact'].map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={active === link ? 'active' : ''}
              onClick={(e) => handleClick(e, link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
