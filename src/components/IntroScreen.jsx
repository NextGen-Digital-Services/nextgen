import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const playRocketSound = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Synthesize "whoosh" thrust using white noise
    const bufferSize = audioCtx.sampleRate * 3; // 3 seconds
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    
    // Sweeping bandpass to mimic doppler launch
    const bandpass = audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(100, audioCtx.currentTime);
    bandpass.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 2.5); 
    
    // Gain for fade in/out
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.3); 
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 3.0); 
    
    noise.connect(bandpass);
    bandpass.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    noise.start();
    noise.stop(audioCtx.currentTime + 3.1);
  } catch(e) {
    console.error("Audio Context disabled", e);
  }
};

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState("loading"); 
  
  useEffect(() => {
    // Show every time the page loads 
    setPhase("idle");
  }, []);

  const handleStart = () => {
    setPhase("cinematic");
    playRocketSound();

    // Sequence timings 
    // Total Duration: 2.5s sequence + 0.5s fade out = 3.0s
    setTimeout(() => {
      setPhase("removing");
      setTimeout(onComplete, 500); 
    }, 2800); 
  };

  if (phase === "loading") return null;

  if (phase === "removing") {
    return (
      <motion.div 
        className="intro-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: 'none' }}
      >
        <div className="intro-bg-overlay" />
      </motion.div>
    );
  }

  return (
    <motion.div className="intro-screen">
      <div className="intro-bg-overlay" />

      <div className="intro-content">
        <AnimatePresence>
          {phase === "idle" && (
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h1>Welcome In NextGen Digital Services</h1>
              <p>Start Your Digital Journey With Us</p>
              <br />
              <button className="primary-btn solid-yellow" onClick={handleStart}>
                Start
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {phase === "cinematic" && (
          <div className="rocket-animation-container">
            {/* SVG Rocket */}
            <motion.div 
              className="rocket"
              initial={{ y: 50, scale: 0 }}
              animate={[
                { y: 0, scale: 1, transition: { duration: 0.5, ease: "backOut" } }, 
                { y: -1200, scale: 1.1, transition: { delay: 1.0, duration: 1.2, ease: "easeIn" } } 
              ]}
            >
              <svg width="80" height="160" viewBox="0 0 80 160" fill="none">
                <path d="M40 0C40 0 10 35 10 90H70C70 35 40 0 40 0Z" fill="white"/>
                <path d="M10 90 L0 130 H10 V90Z" fill="#FACC15"/>
                <path d="M70 90 L80 130 H70 V90Z" fill="#FACC15"/>
                <circle cx="40" cy="55" r="12" fill="#111" stroke="#333" strokeWidth="4"/>
                <path d="M25 90 V110 H55 V90 Z" fill="#333"/>
                {/* Engine Flame Core */}
                <motion.path 
                  d="M30 110 L40 150 L50 110 Z" 
                  fill="#FF4500" 
                  animate={{ opacity: [1, 0.7, 1], scaleY: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 0.1 }}
                  style={{ transformOrigin: "top center" }}
                />
                <motion.path 
                  d="M35 110 L40 135 L45 110 Z" 
                  fill="#FACC15" 
                  animate={{ opacity: [1, 0.5, 1], scaleY: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 0.08 }}
                  style={{ transformOrigin: "top center" }}
                />
              </svg>
            </motion.div>

            {/* Igniting Smoke Effect */}
            <motion.div 
              className="smoke-particles"
              initial={{ opacity: 0, y: 100, scale: 0 }}
              animate={[
                { opacity: 1, y: 100, scale: 1, transition: { duration: 0.5, delay: 0.3 } }, 
                { opacity: 0, scale: 2, transition: { duration: 0.8, delay: 1.0 } } 
              ]}
              style={{ position: 'absolute', zIndex: 25 }}
            >
              <svg width="200" height="100" viewBox="0 0 200 100" fill="gray">
                <motion.circle cx="100" cy="50" r="30" animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 0.3 }} opacity="0.8"/>
                <motion.circle cx="70" cy="60" r="25" animate={{ scale: [1, 1.3, 1], x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 0.4 }} opacity="0.6"/>
                <motion.circle cx="130" cy="60" r="25" animate={{ scale: [1, 1.3, 1], x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 0.4, delay: 0.1 }} opacity="0.6"/>
              </svg>
            </motion.div>

            {/* Left Cloud - appears at bottom, splits outwards */}
            <motion.div 
              className="cloud left-cloud"
              initial={{ x: 0, y: 250, opacity: 0 }}
              animate={[
                { y: 150, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }, 
                { x: -500, opacity: 0, transition: { duration: 0.8, delay: 1.1, ease: "easeIn" } } 
              ]}
            >
              <svg width="240" height="120" viewBox="0 0 240 120" fill="white">
                <circle cx="80" cy="60" r="50"/>
                <circle cx="140" cy="40" r="40"/>
                <circle cx="190" cy="70" r="40"/>
                <rect x="80" y="60" width="110" height="50"/>
              </svg>
            </motion.div>

            {/* Right Cloud - appears at bottom, splits outwards */}
            <motion.div 
              className="cloud right-cloud"
              initial={{ x: 0, y: 250, opacity: 0 }}
              animate={[
                { y: 150, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }, 
                { x: 500, opacity: 0, transition: { duration: 0.8, delay: 1.1, ease: "easeIn" } } 
              ]}
            >
              <svg style={{ transform: "scaleX(-1)" }} width="240" height="120" viewBox="0 0 240 120" fill="white">
                <circle cx="80" cy="60" r="50"/>
                <circle cx="140" cy="40" r="40"/>
                <circle cx="190" cy="70" r="40"/>
                <rect x="80" y="60" width="110" height="50"/>
              </svg>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default IntroScreen;
