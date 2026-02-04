import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  containerVariants,
  itemVariants,
} from '../utils/animations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    file: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      file: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', message: '', file: null })
  }

  return (
    <section id="contact">
      <motion.div
        className="contact-section"
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
          Get In Touch
        </motion.h2>

        <motion.p
          className="section-subtitle"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Let's discuss your next project or just say hello!
        </motion.p>
        
        <motion.div
          className="contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* LEFT SIDE - Contact info slides in from left */}
          <motion.div
            className="contact-info"
            variants={slideInLeftVariants}
          >
            <motion.h3
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Contact Information
            </motion.h3>

            <motion.p
              style={{ color: '#888', marginBottom: '20px' }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </motion.p>
            
            {[
              { icon: '📧', title: 'Email Address', value: 'cjc625907@gmail.com' },
              { icon: '📱', title: 'Phone Number', value: '09982600067' },
              { icon: '📍', title: 'Location', value: 'Tondo, Manila' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(255, 71, 87, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <strong style={{ color: '#fff' }}>{item.title}</strong>
                  <p style={{ color: '#aaa', marginTop: '5px' }}>{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              style={{ marginTop: '20px' }}
              variants={itemVariants}
            >
              <p style={{ color: '#888', marginBottom: '15px', fontWeight: '600' }}>Connect with me:</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '14px' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Form slides in from right */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={slideInRightVariants}
          >
            <motion.div
              className="form-group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <label>Name *</label>
              <motion.input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                whileFocus={{ boxShadow: '0 0 20px rgba(255, 71, 87, 0.3)' }}
              />
            </motion.div>

            <motion.div
              className="form-group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <label>Message *</label>
              <motion.textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
                whileFocus={{ boxShadow: '0 0 20px rgba(255, 71, 87, 0.3)' }}
              ></motion.textarea>
            </motion.div>

            <motion.div
              className="form-group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <label>Profile Photo (optional)</label>
              <motion.input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ padding: '12px' }}
                whileFocus={{ boxShadow: '0 0 20px rgba(255, 71, 87, 0.3)' }}
              />
              <p style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>Max file size: 5MB</p>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(255, 71, 87, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  )
}
