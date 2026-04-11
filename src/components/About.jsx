import { motion } from "framer-motion"

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, type: "spring", stiffness: 50 } 
    }
  }

  const statVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: i * 0.2, type: "spring", stiffness: 50 }
    })
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={textVariants}
            className="about-title"
          >
            About <span className="gradient-text">NextGen</span>
          </motion.h2>
          
          <motion.h3 variants={textVariants} className="about-subtitle">
            We don't just build websites; we build digital experiences.
          </motion.h3>

          <motion.p variants={textVariants} className="about-description">
            NextGen Digital Services is a premium creative agency specializing in cutting-edge 3D web development, 
            high-end branding, and result-driven digital marketing. Our mission is to elevate brands from standard 
            interfaces to immersive digital worlds. We believe the future of the web is interactive, 
            three-dimensional, and unforgettable.
          </motion.p>
          
          <motion.p variants={textVariants} className="about-description">
            Why choose us? We combine the technical prowess of modern React environments like React Three Fiber 
            with pixel-perfect design sensibilities to deliver products that don't just work flawlessly—they 
            command attention.
          </motion.p>

          <div className="about-stats">
            {[
              { label: "Successful Projects", value: "100+" },
              { label: "Years Experience", value: "5+" },
              { label: "Global Clients", value: "50+" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card glass"
                custom={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(108, 99, 255, 0.2)" }}
              >
                <h4 className="gradient-text">{stat.value}</h4>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="about-visuals"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-image-wrapper glass">
            <div className="about-abstract-orb"></div>
            <div className="about-abstract-box"></div>
            <h3 style={{ position: 'relative', zIndex: 10, textAlign: 'center', fontSize: '2rem' }}>
              Turning Vision into <span className="gradient-text">Reality</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
