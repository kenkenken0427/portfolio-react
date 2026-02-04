import React, { useEffect } from 'react'

export default function Particles() {
  useEffect(() => {
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 10 + 's'
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
      document.body.appendChild(particle)
    }

    return () => {
      document.querySelectorAll('.particle').forEach(p => p.remove())
    }
  }, [])

  return null
}
