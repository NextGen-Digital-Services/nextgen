import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import logo from "../assets/logo/Brandmark Icon.png"
import "../styles/global.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "glass-nav" : ""}`}>
      <motion.div 
        className="logo-container"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="logo-round glass"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          {logo && <img src={logo} alt="NextGen Logo" />}
        </motion.div>
        <span className="logo-text">NextGen <span className="gradient-text">Digital Services</span></span>
      </motion.div>

      <div className={`nav-links glass-panel ${menu ? "active" : ""}`}>
        <a href="#" onClick={() => setMenu(false)}>Home</a>
        <a href="#about" onClick={() => setMenu(false)}>About</a>
        <a href="#services" onClick={() => setMenu(false)}>Services</a>
        <a href="#portfolio" onClick={() => setMenu(false)}>Portfolio</a>
        <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? "✕" : "☰"}
      </div>
    </nav>
  )
}

export default Navbar