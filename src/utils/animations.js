// Premium animation variants and configs inspired by Apple, Stripe, and Framer

// Easing curves for elegant, purposeful motion
export const easings = {
  smooth: [0.4, 0, 0.2, 1], // cubic-bezier for smooth ease-out
  gentle: [0.25, 0.46, 0.45, 0.94], // smooth ease
  snappy: [0.34, 1.56, 0.64, 1], // subtle spring
};

// ====== HERO ANIMATIONS ======
export const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Staggered text animations - headline, subtext, buttons in sequence
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// Headline - fades up with more emphasis
export const headlineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easings.smooth,
    },
  },
};

// Greeting - faster fade-up
export const greetingVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// ====== SCROLL-BASED ANIMATIONS ======
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: easings.smooth,
    },
  },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easings.smooth,
    },
  },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easings.smooth,
    },
  },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

// ====== CARD & GRID ANIMATIONS ======
export const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.smooth,
    },
  },
};

// ====== HOVER EFFECTS (MICRO-INTERACTIONS) ======
export const buttonHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easings.gentle,
    },
  },
};

export const cardHoverVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: easings.gentle,
    },
  },
};

export const linkHoverVariants = {
  rest: { color: '#ccc' },
  hover: {
    color: '#ff4757',
    transition: {
      duration: 0.3,
      ease: easings.gentle,
    },
  },
};

// ====== TAP/CLICK EFFECTS ======
export const tapVariants = {
  rest: { scale: 1 },
  tap: {
    scale: 0.96,
    transition: {
      duration: 0.1,
    },
  },
};

// ====== STAGGERED LIST ======
export const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// ====== AMBIENT BACKGROUND ANIMATIONS ======
export const backgroundGradientVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ====== INTERSECTION OBSERVER CONFIG ======
export const scrollAnimationConfig = {
  margin: '0px 0px -100px 0px', // Trigger animation when element is 100px from bottom
  amount: 0.3, // Minimum amount of element that must be visible
};

// Helper function to use with useInView hook
export const getScrollAnimationProps = () => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: false, amount: 0.3 },
  transition: { staggerChildren: 0.1 },
});
