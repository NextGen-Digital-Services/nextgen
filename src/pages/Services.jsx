import { motion } from "framer-motion"
import { useState } from "react"

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

// 👇 SERVICES LIST
const serviceList = [
  "SEO Services",
  "Website Design",
  "Social Media & Content",
  "Web & App Development",
  "Digital Marketing",
  "Digital PR",
  "Targeted Advertising"
]

const Services = () => {

  const [selectedService, setSelectedService] = useState(null)

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="page services-page section-grey"
    >
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h4>Our Expertise</h4>
          <h2>What Solutions We Provide</h2>
        </div>

        {/* 👇 SERVICES GRID */}
        <div className="services-grid">
          {serviceList.map((item, index) => (
            <div 
              key={index} 
              className="service-box"
              onClick={() => setSelectedService(item)}
            >
              {item}
            </div>
          ))}
        </div>

      </div>

      {/* 👇 POPUP FORM */}
      {selectedService && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>{selectedService}</h3>

            <input type="text" placeholder="Your Name" id="name" />
            <input type="email" placeholder="Your Email" id="email" />
            <input type="tel" placeholder="Your Phone" id="phone" />

            <button
              onClick={() => {
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const phone = document.getElementById("phone").value;

                const message = `Hello, I am interested in ${selectedService}%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`;

                window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, "_blank");
              }}
            >
              Submit
            </button>

            <button onClick={() => setSelectedService(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </motion.div>
  )
}

export default Services