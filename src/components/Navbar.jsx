import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo/Logo.png"
import "../styles/global.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

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
          <div className="logo-wrapper">
            {logo && <img src={logo} alt="NextGen Logo" loading="lazy" />}
          </div>
          <span className="logo-text">NextGen Digital Services</span>
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

      {/* RIGHT: Contact CTA & Theme Toggle */}
      <div className="nav-action">
        <button 
          className="theme-toggle-btn" 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
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