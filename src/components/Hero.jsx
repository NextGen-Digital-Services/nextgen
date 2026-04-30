import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from './ParticleCanvas';
import './hero.css';

const Hero = () => {
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <div className="hero-section">
      <ParticleCanvas />
      
      <div className="hero-overlay">
        <div className="hero-content-wrapper">
          <motion.h5
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
            className="hero-tagline"
          >
            DIGITAL AGENCY
          </motion.h5>
          
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 1.05 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
            className="hero-heading"
          >
            Transforming Brands <br /> With <span className="highlight">Impactful</span> Design.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.0, ease: premiumEase }}
            className="hero-description"
            style={{ willChange: "transform, opacity" }}
          >
            We deploy strategic design and engineering to build digital assets that perform beautifully and convert consistently.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: premiumEase }}
            style={{ willChange: "transform, opacity" }}
          >
            <Link to="/contact" className="hero-btn">Start A Project</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
