import React, { useEffect, useState } from 'react'

// Navigation Styles
const navStyles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '18px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(10, 1, 24, 0.7)',
    backdropFilter: 'blur(20px)',
    zIndex: 1000,
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
    transition: 'all 0.3s',
  },
  navScrolled: {
    padding: '12px 50px',
    background: 'rgba(10, 1, 24, 0.9)',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    fontSize: '26px',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #ff4757, #ff2e63)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: '#ccc',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fontWeight: 500,
    position: 'relative',
    fontSize: '15px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    paddingBottom: '5px',
  },
  navLinkActive: {
    color: '#fff',
    borderBottom: '2px solid #ff4757',
  },
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar')
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled')
        setIsScrolled(true)
      } else {
        navbar?.classList.remove('scrolled')
        setIsScrolled(false)
      }

      let current = ''
      const sections = document.querySelectorAll('section')
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })

      setActiveLink(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navStyle = { ...navStyles.nav, ...(isScrolled && navStyles.navScrolled) }

  return (
    <nav id="navbar" style={navStyle}>
      <div style={navStyles.logo}>KENRYK</div>
      <ul style={navStyles.navLinks}>
        <li>
          <a 
            href="#home" 
            style={{
              ...navStyles.navLink,
              ...(activeLink === 'home' && navStyles.navLinkActive)
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            style={{
              ...navStyles.navLink,
              ...(activeLink === 'about' && navStyles.navLinkActive)
            }}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            style={{
              ...navStyles.navLink,
              ...(activeLink === 'portfolio' && navStyles.navLinkActive)
            }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            style={{
              ...navStyles.navLink,
              ...(activeLink === 'contact' && navStyles.navLinkActive)
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
