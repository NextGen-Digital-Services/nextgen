import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(to.replace(/[^0-9]/g, ''), 10);
      if (isNaN(end) || start === end) return;
      
      const incrementTime = Math.max(16, (duration * 1000) / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, to, duration]);

  const suffix = to.replace(/[0-9]/g, '');
  return <span ref={ref}>{count}{suffix}</span>;
}

const Icons = {
  folder: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>,
  user: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  headset: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
};

const statsData = [
  { id: 1, number: "40+", label: "Projects Delivered", icon: Icons.folder },
  { id: 2, number: "25+", label: "Happy Clients", icon: Icons.user },
  { id: 3, number: "3+", label: "Years Experience", icon: Icons.star },
  { id: 4, number: "24/7", label: "Premium Support", icon: Icons.headset }
];

const Stats = React.memo(() => {
  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section className="stats-section-premium">
      <div className="stats-container">
        {statsData.map((stat, i) => (
          <motion.div 
            key={stat.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={statVariants}
            className="premium-stat-card"
          >
            <div className="stat-card-icon">{stat.icon}</div>
            <h3 className="stat-card-number">
              {stat.number.includes('/') ? stat.number : <CountUp to={stat.number} duration={1.5} />}
            </h3>
            <p className="stat-card-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
});

export default Stats;
