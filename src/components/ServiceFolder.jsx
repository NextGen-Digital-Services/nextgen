import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const servicesData = [
  {
    category: "Web & App Dev",
    hue: 217,
    desc: "Robust, scalable, and responsive platforms engineered for high performance.",
    items: ["React/Next.js Apps", "E-Commerce Systems", "API Development"]
  },
  {
    category: "Digital Marketing",
    hue: 270,
    desc: "Data-driven marketing strategies maximizing ROI and audience engagement.",
    items: ["SEO & Analytics", "Targeted Campaigns", "Social Media Strategy"]
  },
  {
    category: "Video Editing",
    hue: 25,
    desc: "Cinematic, engaging video content tailored for all major platforms.",
    items: ["Reels & Shorts", "Corporate Videos", "YouTube Post-Production"]
  },
  {
    category: "Graphic Designing",
    hue: 140,
    desc: "Premium brand identities, compelling UI/UX, and creative assets.",
    items: ["Logo & Branding", "Social Media Kits", "UI/UX Mockups"]
  },
  {
    category: "Paid Advertising",
    hue: 45,
    desc: "Precision ad placements across networks for rapid customer acquisition.",
    items: ["Google Ad Campaigns", "Meta/Facebook Ads", "Retargeting Strategies"]
  }
];

// Doubling array guarantees absolute infinite loop stability in Swiper with limited local slides
const loopedServicesData = [...servicesData, ...servicesData];

const FolderItem = ({ data, isOpen, onClick }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className={`interactive-folder ${isOpen ? 'is-open' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      style={{ '--folder-hue': data.hue }}
    >
      <div className="folder-back">
        <span className="folder-label">{data.category}</span>
      </div>
      
      {/* Folder Inner Content - Pops up smoothly on click */}
      <div className="folder-content-wrapper">
         <AnimatePresence>
            {isOpen && (
              <motion.div
                className="folder-revealed-content"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: -65, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when interacting inside
              >
                <p className="card-desc">{data.desc}</p>
                <ul className="card-bullets">
                  {data.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <button 
                  className="card-cta-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://wa.me/919818528815?text=Hello,%20I'm%20interested%20in%20${encodeURIComponent(data.category)}`, "_blank");
                  }}
                >
                  Start Project
                </button>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      <div className={`folder-front ${isOpen ? 'open' : ''}`}>
        <h3 className="folder-front-text">{data.category}</h3>
        <span className="folder-click-hint">{isOpen ? 'CLOSE FOLDER' : 'CLICK TO EXPLORE'}</span>
      </div>
    </div>
  );
};

const ServiceFolder = () => {
  const [openFolderIndex, setOpenFolderIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFolderClick = (index) => {
    if (openFolderIndex === index) {
      setOpenFolderIndex(null); // Click again to close
    } else {
      setOpenFolderIndex(index);
    }
  };

  return (
    <div className="interactive-services-wrapper">
      <div className="services-ambient-bg" />
      <div className="services-dashed-arc" />

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={10} // Critical parameter for 100% bug-free loop mapping duplicates
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: isMobile ? 15 : 25, 
          stretch: isMobile ? 20 : 0, 
          depth: isMobile ? 120 : 200, 
          modifier: 1.2,
          slideShadows: false, 
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="services-swiper-arc"
      >
        {loopedServicesData.map((folder, index) => (
          <SwiperSlide key={index} style={{ width: isMobile ? '280px' : '340px' }}>
            <FolderItem 
              data={folder} 
              isOpen={openFolderIndex === index}
              onClick={() => handleFolderClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="drag-explore-hint">
        <span>Drag to Explore</span>
      </div>
    </div>
  );
};

export default ServiceFolder;
