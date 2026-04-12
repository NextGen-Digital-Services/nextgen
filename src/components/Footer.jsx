import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Column 1: Address */}
        <div className="footer-block">
          <h4>Address</h4>
          <address>
            Mumbai, India<br />
            New Delhi, India
          </address>
          <div className="footer-socials">
            <a href="#" className="social-icon">IN</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">IG</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-block">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-block">
          <h4>Contact Info</h4>
          <div className="footer-links">
            <a href="tel:+919818528815" style={{ color: "#A0A0A0" }}>+91 9818528815</a>
            <a href="mailto:nextgendigitalservices2026@gmail.com" style={{ color: "#A0A0A0", fontSize: "0.85rem" }}>
              nextgendigitalservices2026@gmail.com
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="footer-block">
          <h4>Newsletter</h4>
          <p>Strategic notes on growth, systems, and digital advantage.</p>
          <form className="newsletter-box" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; NextGen Digital Services. All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
