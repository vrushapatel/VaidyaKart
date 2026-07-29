import React from "react";
import {
  FaShippingFast,
  FaUndo,
  FaLock,
  FaHeadset,
  FaGift,
  FaTruck
} from "react-icons/fa";

import "./Services.css";

const Services = () => {

  const services = [

  {
    id: 1,
    icon: <FaShippingFast />,
    title: "Free Delivery",
    desc: "Get free delivery on medicine and healthcare orders above ₹499."
  },

  {
    id: 2,
    icon: <FaUndo />,
    title: "Easy Returns",
    desc: "Easy returns and replacements on eligible healthcare products."
  },

  {
    id: 3,
    icon: <FaLock />,
    title: "Secure Payment",
    desc: "100% secure payments with UPI, Cards, Net Banking, and Wallets."
  },

  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Healthcare Support",
    desc: "Our healthcare support team is available anytime to assist you."
  },

  {
    id: 5,
    icon: <FaGift />,
    title: "Special Health Offers",
    desc: "Enjoy exclusive discounts and seasonal offers on healthcare essentials."
  },

  {
    id: 6,
    icon: <FaTruck />,
    title: "Fast Medicine Delivery",
    desc: "Quick and reliable medicine delivery to selected locations across India."
  }

];

  return (

    <section className="services-page">

      <div className="services-header">

        <h1>Our Services</h1>

        <p>
          We provide premium shopping experience
          with fast delivery, secure payments and
          excellent customer support.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <div
            className="service-card"
            key={service.id}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );
};

export default Services;