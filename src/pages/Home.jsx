import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import Stats from "../components/Stats"
import ServiceFolder from "../components/ServiceFolder"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } },
  out: { opacity: 0, transition: { duration: 0.5 } }
}

const Home = () => {

  // Cinematic scroll parallax hooks (lightweight calculation via Framer loop)
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Adjust easing for Apple-like premium feel
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="page home-page"
    >
      {/* 1. Hero Section */}
      <motion.section 
        className="hero-minimal"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="hero-content">
          <motion.h5
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
          >
            Digital Agency
          </motion.h5>
          
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
          >
            Transforming Brands <br /> With <span className="title-accent">Impactful</span> Design.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.0, ease: premiumEase }}
            className="hero-subtitle"
            style={{ willChange: "transform, opacity" }}
          >
            We deploy strategic design and engineering to build digital assets that perform beautifully and convert consistently.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
          >
            <Link to="/contact" className="primary-btn">Start A Project</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Services Section */}
      <section className="section-grey relative-bg" style={{ padding: '100px 5%' }}>
        <div className="container" style={{ padding: '0', maxWidth: '100%', overflow: 'hidden' }}>
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
          >
            <h4>Our Services</h4>
            <h2>What Solutions We Provide</h2>
          </motion.div>
          <ServiceFolder />
        </div>
      </section>

      {/* 3. Stats Section */}
      <Stats />
      
    </motion.div>
  )
}

export default Home
