import { motion } from "framer-motion"
import Scene from "../three/Scene"

const Hero = () => {
  const PHONE_NUMBER = "9818528815"
  const whatsappMessage = `Hello NextGen Digital Services! I'm interested in your premium solutions.`

  return (
    <section className="hero" id="home" style={{ transform: "none", width: "100%", overflow: "hidden" }}>
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          We Build <br />
          <span className="gradient-text">Premium 3D</span> <br />
          Digital Experiences
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate your brand with NextGen Digital Services. We combine stunning 3D visuals, immersive animations, and high-performance development.
        </motion.p>
        
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a className="btn-primary gradient-bg" href={`https://wa.me/91${PHONE_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            Start a Project
          </a>
          <a className="btn-secondary glass" href={`tel:+91${PHONE_NUMBER}`}>
            Call Us
          </a>
        </motion.div>
      </div>

      <div className="hero-canvas">
        <Scene />
      </div>
    </section>
  )
}

export default Hero