import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    title: "Digital Marketing",
    icon: "📈",
    description: "Scale your brand with data-driven paid advertising and organic search strategies optimized for measurable ROI and rapid market penetration."
  },
  {
    title: "Website Development",
    icon: "💻",
    description: "Custom-coded, lightning-fast web applications engineered with robust architecture to convert traffic and dominate your niche."
  },
  {
    title: "Video Editing",
    icon: "🎬",
    description: "High-retention, cinematic video production that engages your audience and communicates your brand story dynamically across all media platforms."
  },
  {
    title: "Graphic Designing",
    icon: "🎨",
    description: "Strategic visual identity spanning logos, brand guidelines, and collateral, crafted with uncompromising aesthetic logic and clean layouts."
  },
  {
  title: "SEO Optimization",
  icon: "🔍",
  description: "Improve your website ranking on search engines with advanced SEO strategies and performance optimization."
  },

  { 
  title: "Paid Advertising",
  icon: "📢",
  description: "Run high-converting ad campaigns across Google and social platforms to drive targeted traffic and sales."
  }
  
];

const FolderServices = React.memo(() => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div className="folder-services-container" ref={containerRef}>
      
      {/* Animated Folder Graphic */}
      <motion.div 
        className="animated-folder-graphic"
        initial={{ opacity: 1, scale: 1 }}
        animate={isInView ? { opacity: 0, scale: 1.2 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      >
        <svg width="240" height="180" viewBox="0 0 240 180" fill="none" style={{ transform: 'translateZ(0)' }}>
          {/* Back of folder */}
          <path d="M20 40 H100 L120 60 H220 V160 H20 Z" fill="var(--bg-dark)" stroke="var(--border-light)" strokeWidth="3" />
          
          {/* Paper inside (animates up) */}
          <motion.rect 
            x="30" y="50" width="180" height="100" fill="#EAEAEE" rx="4"
            initial={{ y: 0, opacity: 0 }}
            animate={isInView ? { y: -40, opacity: 1 } : { y: 0, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />

          {/* Front of folder (flaps down) */}
          <motion.path 
            d="M20 60 H220 L210 160 H30 Z" 
            fill="var(--bg-color)" stroke="var(--accent-yellow)" strokeWidth="3"
            initial={{ rotateX: 0 }}
            animate={isInView ? { rotateX: -100 } : { rotateX: 0 }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: 'center 160px' }} 
          />
        </svg>
      </motion.div>

      {/* Swiper Carousel appearing from folder */}
      <motion.div 
        className="services-carousel-wrapper"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        style={{ transform: 'translateZ(0)' }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={500}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="services-swiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <ServiceCard 
                index={index}
                title={service.title} 
                icon={service.icon} 
                description={service.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

    </div>
  );
});

export default FolderServices;
