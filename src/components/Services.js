import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
  <section className="section bg-grey">
    <Title title="services"/>
    <div className="section-center services-cemter">
      {services.map((service) => {
        // Below console.log will show what is in the services.js
        // console.log(service);
        const {id, icon, title, text} = service

        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>

      })}
    </div>
  </section>
  )
}

export default Services
