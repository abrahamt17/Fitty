'use client'

import { useEffect } from 'react'

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const cursorFollower = document.querySelector('.cursor-follower')

    if (!cursor || !cursorFollower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      
      if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px'
        cursorFollower.style.top = followerY + 'px'
      }
      
      requestAnimationFrame(animateFollower)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateFollower()

    const hoverElements = document.querySelectorAll('a, button, .box, .container, .nav__link')
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor?.classList.add('hover'))
      el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  )
}

export default CustomCursor

