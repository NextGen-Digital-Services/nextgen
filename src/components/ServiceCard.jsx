import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"

const ServiceCard = React.memo(({ icon, title, description, index }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: isMobile ? 0.35 : 0.4, delay: 0.1 * index, ease: "easeOut" }}
      whileHover={!isMobile ? { y: -5, transition: { duration: 0.3, ease: "easeOut" } } : {}}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
})

export default ServiceCard
