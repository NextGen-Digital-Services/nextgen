import { motion } from "framer-motion"

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default ServiceCard
