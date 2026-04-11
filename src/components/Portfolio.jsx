import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { motion } from "framer-motion"
import { Navigation } from "swiper/modules"

// Branding
import b1 from "../assets/branding/img001.jpg"
import b2 from "../assets/branding/img002.jpg"
import b3 from "../assets/branding/img003.jpg"
import b4 from "../assets/branding/img004.jpg"

// Print
import p1 from "../assets/print/2.jpg"
import p2 from "../assets/print/3.jpg"
import p3 from "../assets/print/4.jpg"
import p4 from "../assets/print/5.jpg"

// Product
import pr1 from "../assets/product/img101.jpg"
import pr2 from "../assets/product/img102.jpg"
import pr3 from "../assets/product/img103.jpg"
import pr4 from "../assets/product/img104.jpg"

// Typography
import t1 from "../assets/typography/img11.jpg"
import t2 from "../assets/typography/img12.jpg"
import t3 from "../assets/typography/img13.jpg"
import t4 from "../assets/typography/img14.jpg"

// Website
import w1 from "../assets/website/img0001.png"
import w2 from "../assets/website/img0002.png"
import w3 from "../assets/website/img0003.png"
import w4 from "../assets/website/img0004.png"

const renderSwiper = (images) => (
  <Swiper
    spaceBetween={40}
    slidesPerView={3}
    navigation={true}
    modules={[Navigation]}
    breakpoints={{
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }}
    className="portfolio-swiper"
  >
    {images.map((img, i) => (
      <SwiperSlide key={i} style={{ perspective: "1000px" }}>
        <motion.div
          className="portfolio-card glass"
          whileHover={{ 
            rotateY: 10, 
            rotateX: -10, 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
          }}
          whileTap={{ 
            rotateY: 5, 
            rotateX: -5,
            scale: 1.02
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ 
            width: "100%", 
            height: "350px", 
            borderRadius: "16px",
            overflow: "hidden", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "15px",
            transformStyle: "preserve-3d"
          }}
        >
          <motion.img 
            src={img} 
            loading="lazy"
            alt={`Portfolio work ${i}`} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", 
              borderRadius: "8px",
              pointerEvents: "none",
              transform: "translateZ(30px)" 
            }} 
          />
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
)

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our <span className="gradient-text">Work</span>
      </motion.h2>
      <motion.p
        className="portfolio-desc"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Explore our premium 3D and digital creations
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3>Websites & 3D Experiences</h3>
        {renderSwiper([w1, w2, w3, w4])}

        <h3>Branding Solutions</h3>
        {renderSwiper([b1, b2, b3, b4])}

        <h3>Print Media</h3>
        {renderSwiper([p1, p2, p3, p4])}

        <h3>Product Design</h3>
        {renderSwiper([pr1, pr2, pr3, pr4])}

        <h3>Typography</h3>
        {renderSwiper([t1, t2, t3, t4])}
      </motion.div>
    </section>
  )
}

export default Portfolio