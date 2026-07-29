import React from "react";
import "./Reviews.css";

const topReviews = [
  {
    name: "Aarav Patel",
    review: "Amazing shopping experience. Fast delivery.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Priya Shah",
    review: "Loved the product quality and packaging.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Rahul Mehta",
    review: "Best prices compared to other apps.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Sneha Joshi",
    review: "Customer support is very responsive.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  },
  {
    name: "Karan Desai",
    review: "Highly recommended for fashion lovers.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Riya Patel",
    review: "Super smooth checkout process.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Jay Shah",
    review: "Great collection and trendy products.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Neha Trivedi",
    review: "Very satisfied with my purchase.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  }
];

const bottomReviews = [
  {
    name: "Vivek Kumar",
    review: "Fast shipping and secure payment.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Anjali Verma",
    review: "Excellent shopping platform.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Rohan Sharma",
    review: "Affordable products with premium quality.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Meera Singh",
    review: "Best online shopping experience.",
    rating: "⭐⭐⭐⭐⭐",
    score: "5.0"
  },
  {
    name: "Yash Patel",
    review: "Fantastic offers and discounts.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Pooja Shah",
    review: "Loved the overall interface.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Dhruv Joshi",
    review: "Very reliable and trustworthy.",
    rating: "⭐⭐⭐⭐",
    score: "4.0"
  },
  {
    name: "Krisha Patel",
    review: "Will definitely shop again.",
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