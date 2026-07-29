import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
   const navigate = useNavigate();

  const labels = [
    "💊 Up to 40% OFF on Medicines",
    "👟 30% OFF On Shoes",
    "🎧 50% OFF On Wireless Earbuds",
    "✨ New Collection Arrived",
     "🩺 Essential Medical Devices Available",
     "🩹 First Aid Essentials at Best Prices",
  "📈 Best Selling Healthcare Products",
  "🎉 Buy More, Save More!"
  ];

  return (
    <section className="hero">

      {/* Background Circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      {/* TOP MARQUEE */}

      <div className="top-marquee">
        <div className="top-marquee-content">

          {[...labels, ...labels].map((item, index) => (
            <span className="top-label" key={index}>
              {item}
            </span>
          ))}

        </div>
      </div>

      {/* HERO CONTENT */}

      <div className="hero-content">

        <span className="hero-badge">
          🚀 India's Fastest Growing Shopping Platform
        </span>

        <h1>
          Welcome To
          <span> Vrusha's Shopping App</span>
        </h1>

        <p>
          Discover premium fashion, beauty, electronics
          and lifestyle products with amazing deals,
          secure payments and lightning-fast delivery.
        </p>

        <div className="hero-btns">
          <button
          className="shop-btn"
          onClick={() => navigate("/products")}
        >
            Shop Now
          </button>
        </div>

        <div className="hero-stats">

          <div>
            <h3>10K+</h3>
            <span>Customers</span>
          </div>

          <div>
            <h3>60+</h3>
            <span>Products</span>
          </div>

          <div>
            <h3>4.4★</h3>
            <span>Ratings</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;