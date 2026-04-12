import { motion } from "framer-motion"

const Stats = () => {
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  }

  return (
    <section className="stats-section">
      <div className="stats-grid">
        <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{once: true}} variants={statVariants} className="stat-item">
          <div className="stat-icon">✹</div> {/* Placeholder icon */}
          <h3>10</h3>
          <p>Years Experience</p>
        </motion.div>
        
        <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{once: true}} variants={statVariants} className="stat-item">
          <div className="stat-icon">❉</div>
          <h3>58</h3>
          <p>AI Bots In Use</p>
        </motion.div>
        
        <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{once: true}} variants={statVariants} className="stat-item">
          <div className="stat-icon">👥</div>
          <h3>127</h3>
          <p>Satisfied Clients</p>
        </motion.div>
        
        <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{once: true}} variants={statVariants} className="stat-item">
          <div className="stat-icon">✓</div>
          <h3>169</h3>
          <p>Complete Projects</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
