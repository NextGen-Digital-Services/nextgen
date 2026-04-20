import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useCallback } from "react"

const ServiceModal = ({ isOpen, onClose, serviceName }) => {

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleSubmit = useCallback(() => {
    const name = document.getElementById("service-name")?.value || ""
    const email = document.getElementById("service-email")?.value || ""
    const phone = document.getElementById("service-phone")?.value || ""
    const message = `Hello, I am interested in ${serviceName}%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`
    window.open(`https://wa.me/919818528815?text=${message}`, "_blank")
  }, [serviceName])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="popup-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{serviceName}</h3>
            <input type="text" placeholder="Your Name" id="service-name" />
            <input type="email" placeholder="Your Email" id="service-email" />
            <input type="tel" placeholder="Your Phone" id="service-phone" />
            <button className="popup-submit-btn" onClick={handleSubmit}>Submit</button>
            <button className="popup-close-btn" onClick={onClose}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ServiceModal
