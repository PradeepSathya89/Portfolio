import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  let mouseX = 0, mouseY = 0
  let followerX = 0, followerY = 0

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (followerRef.current)
        followerRef.current.style.transform = `translate(${followerX - 16}px, ${followerY - 16}px)`
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', moveCursor)
    animate()

    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (followerRef.current) {
          followerRef.current.style.width = '50px'
          followerRef.current.style.height = '50px'
          followerRef.current.style.opacity = '0.3'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (followerRef.current) {
          followerRef.current.style.width = '32px'
          followerRef.current.style.height = '32px'
          followerRef.current.style.opacity = '0.5'
        }
      })
    })

    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  )
}
