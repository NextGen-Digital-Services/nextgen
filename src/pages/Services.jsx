import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import ServiceModal from "../components/ServiceModal"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

// 👇 SERVICES LIST
const serviceList = [
  "SEO Services",
  "Website Design",
  "Social Media & Content",
  "Web & App Development",
  "Digital Marketing",
  "Digital PR",
  "Targeted Advertising"
]

const Services = () => {

  const [selectedService, setSelectedService] = useState(null)
  const handleClose = useCallback(() => setSelectedService(null), [])

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page services-page section-grey"
    >
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h4>Our Expertise</h4>
          <h2>What Solutions We Provide</h2>
        </div>

        {/* 👇 SERVICES GRID */}
        <div className="services-grid">
          {serviceList.map((item, index) => (
            <div 
              key={index} 
              className="service-box"
              onClick={() => setSelectedService(item)}
            >
              {item}
            </div>
          ))}
        </div>

      </div>

      {/* 👇 ANIMATED POPUP MODAL */}
      <ServiceModal
        isOpen={!!selectedService}
        onClose={handleClose}
        serviceName={selectedService || ""}
      />

    </motion.div>
  )
}

export default Services