import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { num: 4, suffix: '+', label: 'PROJECTS DEPLOYED' },
  { num: 6, suffix: '+', label: 'TECHNOLOGIES' },
  { num: 50, suffix: '+', label: 'GITHUB COMMITS' },
  { num: 100, suffix: '%', label: 'PASSION FOR CODE' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = target / 50
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 30)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div className="stat-num" ref={ref}>{count}{suffix}</div>
}

export default function Stats() {
  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <Counter target={s.num} suffix={s.suffix} />
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
