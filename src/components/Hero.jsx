import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const typingRef = useRef(null)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74,144,217,${p.opacity})`
        ctx.fill()
      })
      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(74,144,217,${0.12 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  // Typing effect
  useEffect(() => {
    const el = typingRef.current
    const texts = ['Frontend Developer', 'React.js Developer', 'UI Builder', 'Web Creator']
    let ti = 0, ci = 0, deleting = false
    const type = () => {
      const current = texts[ti]
      if (!deleting) {
        el.textContent = current.slice(0, ci + 1)
        ci++
        if (ci === current.length) { deleting = true; setTimeout(type, 1800); return }
      } else {
        el.textContent = current.slice(0, ci - 1)
        ci--
        if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length }
      }
      setTimeout(type, deleting ? 60 : 100)
    }
    type()
  }, [])

  return (
    <section id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="hero-content">
        <div className="hero-tag">
          <span className="tag-dot"></span>
          Available for Full-Time Roles
        </div>
        <h1 className="hero-name">
          Kunabathula<br />
          <span className="highlight">Pradeep Sathya</span>
        </h1>
        <p className="hero-role">
          <span ref={typingRef} className="typing-text"></span>
          <span className="cursor-blink">|</span>
        </p>
        <p className="hero-sub">Crafting responsive, clean & user-friendly web experiences with React.js & modern tools.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            <span>View My Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        SCROLL DOWN
      </div>
    </section>
  )
}
