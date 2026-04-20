import React, { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Only run on desktop devices
    if (window.innerWidth < 1024) return;
    
    let frame;
    const handleMouseMove = (e) => {
      frame = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          // Offsets center the 400x400 div
          spotlightRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={spotlightRef} className="global-cursor-spotlight"></div>;
};

export default CursorSpotlight;
