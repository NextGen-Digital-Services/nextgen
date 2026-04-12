import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo/Logo.png"
import "../styles/global.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenu(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* LEFT: Logo */}
      <motion.div 
        className="logo-container"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="logo-container">
          <div className="logo-round">
            {logo && <img src={logo} alt="NextGen Logo" />}
          </div>
          <span className="logo-text">NextGen</span>
        </Link>
      </motion.div>

      {/* CENTER: Links */}
      <div className={`nav-links ${menu ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        {/* Contact available in mobile menu as well to prevent isolation */}
        {menu && <Link to="/contact">Contact</Link>}
      </div>

      {/* RIGHT: Contact CTA */}
      <div className="nav-action">
        <Link to="/contact" className="primary-btn solid-yellow">Contact</Link>
      </div>

      {/* MOBILE: Menu Toggle */}
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? "✕" : "☰"}
      </div>
    </nav>
  )
}

export default Navbar