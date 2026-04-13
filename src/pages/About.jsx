import { motion } from "framer-motion"
import logo from "../assets/logo/Logo.png"
import aboutImg from "../assets/logo/about.png"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const ProgressBar = ({ label, percentage }) => (
  <div className="progress-block">
    <div className="progress-info">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="progress-bar-bg">
      <motion.div
        className={`progress-bar-fill ${percentage > 90 ? 'yellow' : ''}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />
    </div>
  </div>
)

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page about-page"
    >
      <div className="container">

        {/* Section 1: Image Left, Content Right */}
        <div className="about-split">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="About NextGen Logo" loading="lazy" style={{ transform: "scale(2.5)", pointerEvents: "none" }} />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4>About Us</h4>
            <h2>#1 Digital solution with 3 years of experience</h2>
            <p>
              For over a decade, we've helped brands, startups, and businesses navigate the digital landscape with clarity, precision, and performance-driven execution. We bridge the gap between technical architecture and creative storytelling.
            </p>

            <div className="founder-block">
              <div className="years">
                3
              </div>
              <div className="founder-text">
                <h5>Years of Experience</h5>
                <p>In Development, Creative, & Marketing</p>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              "Our founder brings over a decade of deep-rooted expertise in the digital ecosystem. Having mastered the intersection of high-end web development, creative brand strategy, and performance-driven marketing, we lead every project with a focus on measurable business outcomes."
            </p>

            <button className="primary-btn solid-yellow" style={{ marginTop: '30px' }}>Read More</button>
          </motion.div>
        </div>

        {/* Section 2: Text Left, Circle Image Right */}
        <div className="about-split-reversed" style={{ marginTop: '120px' }}>

          <motion.div
            className="about-content about-content-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4>Our Story</h4>
            <h2>Engineering Digital Excellence Since Day One</h2>
            <p>
              NextGen Digital Services was founded on the principle that digital growth shouldn't be complex.
              We blend strategic logic with striking visuals to engineer assets that actually perform.
              In the age of noise, clarity and premium presentation form the ultimate advantage.
            </p>

            <div style={{ marginTop: '40px' }}>
              <ProgressBar label="Digital Marketing Integration" percentage={87} />
              <ProgressBar label="Modern Web Engineering" percentage={92} />
              <ProgressBar label="Premium Design & UI/UX" percentage={97} />
            </div>
          </motion.div>

          <motion.div
            className="about-circle-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutImg} alt="Abstract Circle Representation" loading="lazy" />
          </motion.div>

        </div>

      </div>
    </motion.div>
  )
}

export default About
