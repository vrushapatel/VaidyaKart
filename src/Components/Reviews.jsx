import React from "react";
import "./Reviews.css";

const topReviews = [
  {
    name: "Aarav Patel",
    review: "Medicines were delivered on time and well packed.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Priya Shah",
    review: "Easy to find healthcare products at affordable prices.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Rahul Mehta",
    review: "Best pharmacy app with genuine medicines.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Sneha Joshi",
    review: "Customer support helped me choose the right product.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  },
  {
    name: "Karan Desai",
    review: "Excellent collection of healthcare and wellness products.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Riya Patel",
    review: "Checkout was simple and delivery was very quick.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Jay Shah",
    review: "Medical devices were authentic and reasonably priced.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Neha Trivedi",
    review: "Highly satisfied with the quality of medicines.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  }
];

const bottomReviews = [
  {
    name: "Vivek Kumar",
    review: "Fast medicine delivery with secure online payment.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Anjali Verma",
    review: "A trusted platform for healthcare essentials.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Rohan Sharma",
    review: "Affordable medicines with genuine quality.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Meera Singh",
    review: "My go-to website for medicines and wellness products.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  },
  {
    name: "Yash Patel",
    review: "Amazing discounts on healthcare products.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Pooja Shah",
    review: "The website is clean, easy to use, and very helpful.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Dhruv Joshi",
    review: "Reliable pharmacy with quality medical products.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Krisha Patel",
    review: "I'll definitely order my medicines from VaidyaKart again.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  }
];

const Reviews = () => {
  return (
    <section className="reviews">

      <h2>What Our Customers Say</h2>

      {/* TOP ROW */}

      <div className="review-slider">

        <div className="review-track">

          {[...topReviews, ...topReviews].map((item, index) => (

            <div className="review-card" key={index}>

              <h3>{item.name}</h3>

              <p>{item.review}</p>

              <div className="rating">
                <span>{item.rating}</span>
                <small>{item.score}/5</small>
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM ROW */}

      <div className="review-slider reverse">

        <div className="review-track">

          {[...bottomReviews, ...bottomReviews].map((item, index) => (

            <div className="review-card" key={index}>

              <h3>{item.name}</h3>

              <p>{item.review}</p>

              <div className="rating">
                <span>{item.rating}</span>
                <small>{item.score}/5</small>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Reviews;