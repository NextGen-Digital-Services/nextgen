import { motion } from "framer-motion"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page contact-page"
      style={{ backgroundColor: 'var(--bg-section)' }}
    >
      <div className="container">
        <div className="section-header">
          <h4>Contact Us</h4>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell us about your project..." required></textarea>
            </div>
            
            <button className="primary-btn solid-yellow" type="submit" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
