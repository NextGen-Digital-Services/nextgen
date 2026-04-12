import { motion } from "framer-motion"
import ServiceCard from "../components/ServiceCard"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const servicesData = [
  {
    title: "Digital Marketing",
    icon: "📈",
    description: "Scale your brand with data-driven paid advertising and organic search strategies optimized for measurable ROI and rapid market penetration."
  },
  {
    title: "Website Development",
    icon: "💻",
    description: "Custom-coded, lightning-fast web applications engineered with robust architecture to convert traffic and dominate your niche."
  },
  {
    title: "Video Editing",
    icon: "🎬",
    description: "High-retention, cinematic video production that engages your audience and communicates your brand story dynamically across all media platforms."
  },
  {
    title: "Graphic Designing",
    icon: "🎨",
    description: "Strategic visual identity spanning logos, brand guidelines, and collateral, crafted with uncompromising aesthetic logic and clean layouts."
  }
]

const Services = () => {
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
        <div className="section-header">
          <h4>Our Expertise</h4>
          <h2>What Solutions We Provide</h2>
        </div>

        <div className="service-grid">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              title={service.title} 
              icon={service.icon} 
              description={service.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services
