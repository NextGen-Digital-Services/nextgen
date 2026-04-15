import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Column 1: Address */}
        <div className="footer-block">
          <h4>Address</h4>
          <address>
            New Delhi, India
          </address>
          <div className="footer-socials">
            <a 
              href="https://www.instagram.com/nextgen_digital_service5?igsh=cDM2bG1pZGpldGgy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
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
