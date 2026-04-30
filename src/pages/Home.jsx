import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"
import Stats from "../components/Stats"
import ServiceFolder from "../components/ServiceFolder"
import Hero from "../components/Hero"

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
      <Hero />

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
