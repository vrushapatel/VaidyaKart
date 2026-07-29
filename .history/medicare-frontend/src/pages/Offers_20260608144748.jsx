import React from "react";
import "./Offers.css";

const Offers = ({ cart, setCart }) => {

  const offers = [

    {
      id: 1,
      name: "Smart Watch",
      oldPrice: 2499,
      discount: 40,
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627"
    },

    {
      id: 2,
      name: "Sports Shoes",
      oldPrice: 1999,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764"
    },

    {
      id: 3,
      name: "Wireless Earbuds",
      oldPrice: 1799,
      discount: 50,
      image:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?q=80&w=1074"
    },

    {
      id: 4,
      name: "Gaming Mouse",
      oldPrice: 799,
      discount: 25,
      image:
        "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1170"
    },

    {
      id: 5,
      name: "Ladies Handbag",
      oldPrice: 1299,
      discount: 35,
      image:
        "https://images.unsplash.com/photo-1681747685985-a401c271156c?q=80&w=1170"
    },

    {
      id: 6,
      name: "Denim Jacket",
      oldPrice: 1499,
      discount: 45,
      image:
        "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?q=80&w=1170"
    },

    {
      id: 7,
      name: "Laptop Bag",
      oldPrice: 999,
      discount: 20,
      image:
        "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=1074"
    },

    {
      id: 8,
      name: "Bluetooth Speaker",
      oldPrice: 1599,
      discount: 60,
      image:
        "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1074"
    },

    {
      id: 9,
      name: "Face Serum",
      oldPrice: 499,
      discount: 30,
      offer: "🎉 Buy 1 Get 1 Free",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=687"
    },

    {
      id: 10,
      name: "Glow Face Wash",
      oldPrice: 299,
      discount: 40,
      offer: "🎉 Buy 1 Get 1 Free",
      image:
        "https://images.unsplash.com/photo-1760488029475-41ff1eaa904b?q=80&w=860"
    },

    {
      id: 11,
      name: "Hair Serum",
      oldPrice: 499,
      discount: 35,
      offer: "🎉 Buy 1 Get 1 Free",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"
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