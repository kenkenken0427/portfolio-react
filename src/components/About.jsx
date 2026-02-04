import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  fadeUpVariants,
  slideInLeftVariants,
  slideInRightVariants,
  containerVariants,
  itemVariants,
} from "../utils/animations";

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const offset = window.scrollY * 0.08;
      aboutRef.current.style.backgroundPositionY = `${offset}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


useEffect(() => {
  const roles = [
    "IT Student",
    "Aspiring Full-Stack Developer",
    "Future Software Engineer"
  ];

const image = document.querySelector(".about-image");

if (image) {
  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    image.style.setProperty("--x", `${x}%`);
    image.style.setProperty("--y", `${y}%`);
  });
}

  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeTarget = document.querySelector(".typewriter");

  const typeEffect = () => {
    if (!typeTarget) return;

    const current = roles[roleIndex];
    if (!isDeleting) {
      typeTarget.textContent = current.slice(0, charIndex++);
      if (charIndex > current.length) {
        setTimeout(() => (isDeleting = true), 1200);
      }
    } else {
      typeTarget.textContent = current.slice(0, charIndex--);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
  };

  const interval = setInterval(typeEffect, isDeleting ? 50 : 90);
  return () => clearInterval(interval);
}, []);



  return (
    <section id="about" className="about-hero" ref={aboutRef}>

      {/* ABOUT HEADER */}
      <motion.div
  className="about-header"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.6 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  }}
>
  <motion.h2
    className="about-title"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    About
  </motion.h2>

  <motion.div
    className="about-underline"
    variants={{
      hidden: { scaleX: 0 },
      visible: { scaleX: 1 },
    }}
    style={{ originX: 0 }}
  />

  <motion.p
    className="about-subtitle"
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    ✨ Transforming ideas into digital experiences ✨
  </motion.p>
</motion.div>


<div className="about-grid">

      {/* LEFT CONTENT */}
      <motion.div
        className="about-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={slideInLeftVariants}
      >
        <motion.span
          className="about-greeting"
          variants={itemVariants}
        >
          Hello, I'm
        </motion.span>

        <motion.h1
          className="about-name"
          variants={fadeUpVariants}
        >
          John Kenryk <span>Cruz</span>
        </motion.h1>

        <motion.p className="about-role" variants={itemVariants}>
  <span className="typewriter"></span>
</motion.p>


        <motion.p
          className="about-text"
          variants={itemVariants}
        >
          I'm an Information Technology student passionate about building
          responsive web applications, secure network solutions, and
          data-driven systems that solve real-world problems.
        </motion.p>

        <motion.div
  className="about-quote"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>

          "Technology works best when it empowers people, not when it replaces them."
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="about-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={slideInRightVariants}
      >
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ scale: 1.05 }}
        >
          <img src="/download.png" alt="John Kenryk Cruz" />
        </motion.div>
      </motion.div>

</div>

{/* download cv */}

<motion.div
  className="about-cta"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
>
  <a
    href="/Ken_cv.pdf"
    download
    className="btn btn-primary"
  >
    📄 Download CV
  </a>

  <a
    href="#portfolio"
    className="btn btn-outline"
  >
    &lt;/&gt; View Projects
  </a>
</motion.div>




      {/* STATS */}
     <motion.div
  className="about-stats"
  initial="hidden"
  whileInView="visible"
  viewport={{ amount: 0.3 }}
  variants={containerVariants}
>
  {[
    {
      icon: "</>",
      title: "Total Projects",
      value: "1",
      desc: "Innovative web solutions crafted",
    },
    {
      icon: "🎓",
      title: "Certificates",
      value: "8",
      desc: "Professional skills validated",
    },
    {
      icon: "🌐",
      title: "Years of Experience",
      value: "1",
      desc: "Continuous learning journey",
    },
  ].map((stat, i) => (
    <motion.div
      key={i}
      className="stat-card advanced"
      variants={itemVariants}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <div className="stat-top">
        <div className="stat-icon">{stat.icon}</div>
        <span className="stat-arrow">↗</span>
      </div>

      <div className="stat-content">
        <h4>{stat.title}</h4>
        <p>{stat.desc}</p>
      </div>

      <div className="stat-value">{stat.value}</div>
    </motion.div>
  ))}
</motion.div>


      {/* SCROLL INDICATOR */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span></span>
      </motion.div>

    </section>
  );
}
