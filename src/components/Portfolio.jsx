import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeUpVariants,
  cardContainerVariants,
  cardItemVariants,
  cardHoverVariants,
  tapVariants,
} from '../utils/animations'

const portfolioData = [
  {
    id: 1,
    category: 'projects',
    icon: '🌐',
    label: 'Web Development',
    title: 'Company Website',
    description: 'Modern corporate website built with React, featuring smooth animations, responsive design, and optimized performance. Integrated with headless CMS for easy content management.'
  },
  {
    id: 2,
    category: 'projects',
    icon: '🛒',
    label: 'E-Commerce Platform',
    title: 'Full-Stack Shopping App',
    description: 'Complete e-commerce solution with payment gateway integration, inventory management, and real-time order tracking. Built with MERN stack and Redux for state management.'
  },
  {
    id: 3,
    category: 'projects',
    icon: '☕',
    label: 'Business Website',
    title: 'Coffee Shop Profile',
    description: 'Elegant coffee shop website featuring interactive menu, online ordering system, and location finder. Implemented with Next.js for SEO optimization and fast loading.'
  },
  {
    id: 4,
    category: 'certificates',
    icon: '🎓',
    label: 'Certification',
    title: 'Meta Front-End Developer',
    description: 'Professional certificate covering React, HTML/CSS, JavaScript, and modern front-end development best practices from Meta.'
  },
  {
    id: 5,
    category: 'certificates',
    icon: '🏅',
    label: 'Achievement',
    title: 'AWS Cloud Practitioner',
    description: 'Foundational certification demonstrating knowledge of AWS Cloud concepts, services, and basic architecture best practices.'
  },
  {
    id: 6,
    category: 'skills',
    icon: '⚡',
    label: 'Frontend',
    title: 'React & Modern JS',
    description: 'Expert in React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript ES6+. Proficient in state management with Redux and Context API.'
  },
  {
    id: 7,
    category: 'skills',
    icon: '🔧',
    label: 'Backend',
    title: 'Node.js & Databases',
    description: 'Experienced with Node.js, Express, MongoDB, PostgreSQL, and RESTful API design. Familiar with authentication, authorization, and security best practices.'
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('projects')
  const [activeType, setActiveType] = useState('all')

  const filteredCards = portfolioData.filter(card => {
    const matchCategory = activeCategory === 'projects' || card.category === activeCategory
    return matchCategory
  })

  const typeFilters = ['all', 'project', 'design', 'editing']

  return (
    <section id="portfolio">
      <motion.div
        className="portfolio-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <motion.h2
          className="section-title"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Portfolio Showcase
        </motion.h2>

        <motion.p
          className="section-subtitle"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Explore my journey through projects, certifications, and technical expertise
        </motion.p>

        {/* Main category tabs */}
        <motion.div
          className="portfolio-tabs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          {['projects', 'certificates', 'skills'].map((category) => {
            const labels = {
              projects: '🚀 Projects',
              certificates: '🏆 Certificates',
              skills: '⚡ Tech Stack',
            };
            return (
              <motion.button
                key={category}
                className={`tab-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {labels[category]}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Secondary filter pills */}
        <motion.div
          className="portfolio-filters"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          {typeFilters.map((type) => (
            <motion.button
              key={type}
              className={`filter-pill ${activeType === type ? 'active' : ''}`}
              onClick={() => setActiveType(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated card grid with stagger */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="portfolio-grid"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {filteredCards.map(card => (
              <motion.div
                key={card.id}
                className="portfolio-card"
                data-category={card.category}
                variants={cardItemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="card-image-wrapper">
                  <div className="card-icon">{card.icon}</div>
                </div>

                <div className="card-content">
                  <div className="card-label">{card.label}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
