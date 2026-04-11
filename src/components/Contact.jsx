import { useState } from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  // Global Phone Number
  const PHONE_NUMBER = "9818528815"

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailBody = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AMessage: ${form.message}`
    window.location.href = `mailto:nextgendigitalservices2026@gmail.com?subject=New Client Inquiry&body=${emailBody}`
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello NextGen Digital Services!%0A%0AMy Name: ${form.name || '[Your Name]'}%0AEmail: ${form.email || '[Your Email]'}%0APhone: ${form.phone || '[Your Phone]'}%0AMessage: ${form.message || '[Your Message]'}`
    window.open(`https://wa.me/91${PHONE_NUMBER}?text=${whatsappMessage}`, "_blank")
  }

  return (
    <>
      <section id="contact" className="contact">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2' }}>Let's build something <br/> amazing together.</h3>
            <p>Whether you need a cutting-edge 3D website, a modern brand identity, or a result-driven marketing campaign, we are here to help your business grow.</p>
            
            <div className="contact-details glass">
               <p><strong style={{color: '#00F5FF'}}>Email:</strong> nextgendigitalservices2026@gmail.com</p>
               <p><strong style={{color: '#6C63FF'}}>Phone:</strong> +91 {PHONE_NUMBER}</p>
            </div>

            <motion.a 
              className="whatsapp-btn"
              href="#"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(37, 211, 102, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Message on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass contact-form-wrapper"
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
              />
              
              <input 
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
              
              <input 
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
              
              <textarea
                required
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
              />
              
              <motion.button 
                type="submit" 
                className="contact-btn gradient-bg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Addition */}
      <footer className="footer glass-nav">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">NextGen <span className="gradient-text">Digital Services</span></div>
            <p style={{ color: '#94a3b8', marginTop: '10px', maxWidth: '300px' }}>Premium 3D web experiences and digital marketing solutions.</p>
          </div>
          
          <div className="footer-links-group">
            <h4 style={{ marginBottom: '15px', color: 'white' }}>Quick Links</h4>
            <motion.div 
              className="footer-links"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {[
                { name: 'Home', id: '#home' },
                { name: 'About', id: '#about' },
                { name: 'Services', id: '#services' },
                { name: 'Portfolio', id: '#portfolio' },
                { name: 'Contact', id: '#contact' }
              ].map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.id}
                  className="quick-link"
                  variants={{
                    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      filter: "blur(0px)",
                      transition: { duration: 0.5, type: 'spring' } 
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="footer-contact">
            <h4 style={{ marginBottom: '15px', color: 'white' }}>Connect</h4>
            <div className="footer-links">
              <a href={`tel:+91${PHONE_NUMBER}`}>Call Us</a>
              <a href="mailto:nextgendigitalservices2026@gmail.com">Email Us</a>
              <motion.a 
                href="https://www.instagram.com/nextgen_digital_service5?igsh=cDM2bG1pZGpldGgy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#C13584' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Instagram</span>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NextGen Digital Services. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Contact