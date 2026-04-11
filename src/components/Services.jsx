import { motion } from "framer-motion"

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring", stiffness: 50 } 
    }
  }

  return (
    <section id="services" className="services">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our <span className="gradient-text">Services</span>
      </motion.h2>

      <div className="service-grid">
        {/* Website Development */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10, 
            rotateX: -10,
            boxShadow: "0 20px 40px rgba(108, 99, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98, rotateY: 5, rotateX: -5 }} /* Mobile touch effect */
          className="service-card glass"
        >
          <h3>Website Development</h3>
          <ul>
            <li>3D Websites</li>
            <li>Landing Pages</li>
            <li>Ecommerce Websites</li>
            <li>Business Websites</li>
            <li>Portfolio Websites</li>
          </ul>
        </motion.div>

        {/* Graphic Design */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            scale: 1.05,
            rotateY: -10, 
            rotateX: 10,
            boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98, rotateY: -5, rotateX: 5 }} /* Mobile touch effect */
          className="service-card glass"
        >
          <h3>Graphic Design</h3>
          <ul>
            <li>Logo Design</li>
            <li>Branding</li>
            <li>Posters</li>
            <li>Social Media</li>
          </ul>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10, 
            rotateX: -10,
            boxShadow: "0 20px 40px rgba(108, 99, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98, rotateY: 5, rotateX: -5 }} /* Mobile touch effect */
          className="service-card glass"
        >
          <h3>Digital Marketing</h3>
          <ul>
            <li>Meta Ads</li>
            <li>Google Ads</li>
            <li>YouTube Ads</li>
            <li>Lead Generation</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Services