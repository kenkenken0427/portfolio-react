import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import {
  containerVariants,
  headlineVariants,
  greetingVariants,
  itemVariants,
  buttonHoverVariants,
  cardHoverVariants,
  tapVariants,
} from '../utils/animations'
import { Typewriter } from 'react-simple-typewriter'

import { useEffect } from 'react'



export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Ken_cv.pdf'
    link.download = 'Ken_cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrintCV = () => {
    window.open('/Ken_cv.pdf', '_blank')
  }


  return (
    <section id="home">
      <div className="hero">
        {/* Content on left - Staggered reveals */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting - Quick fade-up */}
          <motion.div className="greeting" variants={greetingVariants}>
            👋 Hello, I'm
          </motion.div>

          {/* Main Headline - Emphasis fade-up */}
          <motion.h1 variants={headlineVariants}>
  IT Student & Aspiring <br />
  <span className="highlight typing">
    <Typewriter
      words={['Full-Stack Developer']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</motion.h1>


          {/* Subtitle */}
          <motion.p className="subtitle" variants={itemVariants}>
            Web Development • Networking • Data-Driven Solutions
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants}>
            A motivated IT student focused on building responsive web applications,
            secure network solutions, and data-driven projects. I enjoy learning new
            technologies and applying them to real-world problems.
          </motion.p>

          {/* Tags with stagger */}
          <motion.div className="tags" variants={containerVariants}>
            {['⚛️ React', '💻 JavaScript', '🟢 Node.js', '🎨 Tailwind CSS'].map((tag, i) => (
              <motion.span
                key={i}
                className="tag"
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: '0 8px 20px rgba(255, 71, 87, 0.4)' }}
                transition={{ duration: 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>



     {/* CTA Wrapper */}
<motion.div className="cta-wrapper" variants={containerVariants}>

  {/* CTA Buttons row */}
  <div className="cta-buttons">
    <motion.a
      href="#contact"
      className="btn-primary"
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
      initial="rest"
      animate="rest"
    >
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        💬
      </motion.span>
      {' '}Contact Me
    </motion.a>

    <motion.a
      href="#portfolio"
      className="btn-secondary"
      variants={itemVariants}
      whileHover="hover"
      whileTap="tap"
      initial="rest"
      animate="rest"
    >
      <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      >
        📁
      </motion.span>
      {' '}Portfolio
    </motion.a>
  </div>

  {/* Social Icons UNDER buttons */}
  <motion.div
    className="social-row"
    variants={containerVariants}
  >
    <motion.a
      href="https://github.com/kenkenken0427?tab=overview&from=2026-02-01&to=2026-02-04"
      target="_blank"
      rel="noreferrer"
      className="social-btn"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-github"></i>
    </motion.a>

    <motion.a
      href="https://www.linkedin.com/in/john-kenryk-cruz-82b683399/"
      target="_blank"
      rel="noreferrer"
      className="social-btn"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-linkedin-in"></i>
    </motion.a>

    <motion.a
      href="https://www.instagram.com/kenrykcruz/"
      target="_blank"
      rel="noreferrer"
      className="social-btn"
      variants={itemVariants}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-instagram"></i>
    </motion.a>
  </motion.div>

</motion.div>

          </motion.div>
      
        {/* Spline Background on right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5 }}
          className="spline-container"
        >
          <Spline
            scene="https://prod.spline.design/cIErIZtxdMbEMlia/scene.splinecode"
            className="spline-bg"
          />
        </motion.div>
      </div>
    </section>
  )
}

