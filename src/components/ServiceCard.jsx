import React from "react"

const ServiceCard = React.memo(({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
})

export default ServiceCard
