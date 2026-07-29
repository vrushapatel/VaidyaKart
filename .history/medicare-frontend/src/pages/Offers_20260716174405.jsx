import React from "react";
import "./Offers.css";

const Offers = ({ cart, setCart }) => {

  const offers = [

  {
    id: 1,
    name: "Digital Thermometer",
    oldPrice: 199,
    discount: 30,
    offerName: "🩺 30% OFF on Medical Devices",
    image: "..."
  },

  {
    id: 2,
    name: "Blood Pressure Monitor",
    oldPrice: 1499,
    discount: 30,
    offerName: "🩺 30% OFF on Medical Devices",
    image: "..."
  },

  {
    id: 3,
    name: "Dolo 650",
    oldPrice: 45,
    discount: 10,
    offerName: "🤒 10% OFF on Fever & Pain Relief",
    image: "..."
  },

  {
    id: 4,
    name: "Combiflam",
    oldPrice: 150,
    discount: 10,
    offerName: "🤒 10% OFF on Fever & Pain Relief",
    image: "..."
  },

  {
    id: 5,
    name: "Pulse Oximeter",
    oldPrice: 699,
    discount: 30,
    offerName: "🩺 30% OFF on Medical Devices",
    image: "..."
  },

  {
    id: 6,
    name: "Steam Vaporizer",
    oldPrice: 399,
    discount: 25,
    offerName: "💊 Healthcare Devices Sale",
    image: "..."
  },

  {
    id: 7,
    name: "Vitamin C Tablets",
    oldPrice: 249,
    discount: 20,
    offerName: "🌿 20% OFF on Vitamins & Supplements",
    image: "https://m.media-amazon.com/images/I/61Q-+KR3WcL._AC_UF1000,1000_QL80_.jpg"
  },

  {
    id: 8,
    name: "Omega-3 Fish Oil",
    oldPrice: 755,
    discount: 35,
    offerName: "💪 35% OFF on Health Supplements",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiD8HUQS9JB1mwvTTQny7AI090PMlAEyZXFdYg_9VjM2A02w_YmpyX677a3ocuQ-qjYTeNwWxf1ECqoV7Jy2JSi2M8SBY3efZ4YS0YwDOT260M1Zyv-J2nsPpbrJUyasNiG8Hh3k1TkwU&usqp=CAc"
  },

  {
    id: 9,
    name: "Himalaya Neem Face Wash",
    oldPrice: 299,
    discount: 30,
    offerName: "✨ Buy 1 Get 1 Free on Skin Care",
    offer: "🎉 Buy 1 Get 1 Free",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqnrGaVAyEocIVZL52ldQO-fXY3M0qPZvlS1uzzI8fQ&s=10"
  },

  {
    id: 10,
    name: "Boroline Cream",
    oldPrice: 249,
    discount: 25,
    offerName: "✨ Buy 1 Get 1 Free on Skin Care",
    offer: "🎉 Buy 1 Get 1 Free",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTDpMzoOZTC_WW9rAaaXziRlaU9tQxIqGIOuAbr8BBQ9fqyS8CjNhikkxmI6INeLeY6G4EJBJRidDSMbD1g7kqoJjpWh51iL1in0lS8Z2WV5Af7ICIKsdovgQo2rJA0T6Xgy__ZkDIdw6U&usqp=CAc"
  },

  {
    id: 11,
    name: "Hand Sanitizer",
    oldPrice: 60,
    discount: 40,
    offerName: "🧴 Buy 1 Get 1 Free on Personal Care",
    offer: "🎉 Buy 1 Get 1 Free",
     image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJgJuqZByAALDt7d9KZVdyCa7sfnTywpT79hmhx3X7O6JCnYhgmMG4PAQx-RdiI0Dy1nC4dkBjNZzaMUbS1O1FM4_hS0WqXXJsHSu0Bj0Xvmc5DmqtfXBbNdRqB2ziIvL3s7bLTgM&usqp=CAc"
  }

];

  const addToCart = (product) => {

    const finalPrice = Math.round(
      product.oldPrice -
      (product.oldPrice * product.discount) / 100
    );

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    // BUY 1 GET 1 FREE PRODUCTS
    if (product.offer) {

      if (existingProduct) {

        const updatedCart = cart.map((item) => {

          if (
            item.id === product.id ||
            item.id === `${product.id}-FREE`
          ) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }

          return item;
        });

        setCart(updatedCart);

      } else {

        setCart([
          ...cart,

          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: finalPrice,
            quantity: 1
          },

          {
            id: `${product.id}-FREE`,
            name: `${product.name} (FREE)`,
            image: product.image,
            price: 0,
            quantity: 1
          }
        ]);

      }

      return;
    }

    // NORMAL PRODUCTS
    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: finalPrice,
          quantity: 1
        }
      ]);

    }

  };

  return (

    <section className="offers-page">

      <h1>🔥 Mega Sale Offers</h1>

      <div className="offers-grid">

        {offers.map((item) => {

          const finalPrice = Math.round(
            item.oldPrice -
            (item.oldPrice * item.discount) / 100
          );

          return (

            <div
              className="offer-card"
              key={item.id}
            >

              {item.offer && (
                <span className="bogo-badge">
                  {item.offer}
                </span>
              )}

              <span className="sale-badge">
                {item.discount}% OFF
              </span>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <div className="price-box">

                <span className="old-price">
                  ₹{item.oldPrice}
                </span>

                <span className="new-price">
                  ₹{finalPrice}
                </span>

              </div>

              {item.offer && (
                <p className="free-item-text">
                  Get 2 Items For Price Of 1
                </p>
              )}

              <button
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>

            </div>

          );

        })}

      </div>

    </section>

  );

};

export default Offers;