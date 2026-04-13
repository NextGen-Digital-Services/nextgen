import { motion } from "framer-motion"
import FolderServices from "../components/FolderServices"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

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
        <FolderServices />
      </div>
    </motion.div>
  )
}

export default Services
