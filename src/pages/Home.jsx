import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ServiceCard from "../components/ServiceCard"
import Stats from "../components/Stats"

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

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page home-page"
    >
      {/* 1. Hero Section */}
      <section className="hero-minimal">
        <div className="hero-content">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Digital Agency
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming Brands <br /> With <span className="title-accent">Impactful</span> Design.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-subtitle"
          >
            We deploy strategic design and engineering to build digital assets that perform beautifully and convert consistently.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact" className="primary-btn">Start A Project</Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="section-grey" style={{ padding: '100px 5%' }}>
        <div className="container" style={{ padding: '0' }}>
          <div className="section-header">
            <h4>Our Services</h4>
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
      </section>

      {/* 3. Stats Section */}
      <Stats />
      
    </motion.div>
  )
}

export default Home
