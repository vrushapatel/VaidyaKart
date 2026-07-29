import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaShoppingCart
} from "react-icons/fa";

import upiQR from "../assets/Scan.svg";

const Cart = ({
  cart,
  setCart,
  setOrderBill
}) => {

  const [paymentMethod, setPaymentMethod] = useState("");

  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: (item.quantity || 1) - 1,
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const delivery = subtotal > 999 ? 0 : 10;

  const total = subtotal + delivery;

  const checkout = () => {

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!paymentMethod) {
      alert("Please select payment method.");
      return;
    }

    if (
      paymentMethod === "UPI" &&
      upiId.trim() === ""
    ) {
      alert("Enter your UPI ID.");
      return;
    }

    setOrderBill(total);

    alert("Order Placed Successfully 🎉");

    setCart([]);

  };

  return (

    <div className="cart-page">

      <h1>
        <FaShoppingCart /> My Cart
      </h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your cart is empty.</h2>

        </div>

      ) : (

        <>
          <div className="cart-container">

            {/* CART ITEMS */}

            <div className="cart-items">

              {cart.map((item) => (

                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-details">

                    <h3>{item.name}</h3>

                    <p className="cart-category">
                      {item.category}
                    </p>

                    <h2>₹{item.price}</h2>

                    <div className="quantity-box">

                      <button
                        className="qty-btn"
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        <FaMinus />
                      </button>

                      <span>
                        {item.quantity || 1}
                      </span>

                      <button
                        className="qty-btn"
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        <FaPlus />
                      </button>

                    </div>

                    <h4>

                      Total :

                      ₹
                      {item.price *
                        (item.quantity || 1)}

                    </h4>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    <FaTrash />
                  </button>

                </div>

              ))}

              <button
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>

            </div>

            {/* BILLING SECTION */}

            <div className="billing-section">

              <h2>Bill Summary</h2>

              <div className="bill-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>


              <div className="bill-row">
                <span>Delivery</span>
                <span>
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </span>
              </div>

              <hr />

              <div className="bill-total">

                <span>Total</span>

                <span>
                  ₹{total.toFixed(2)}
                </span>

              </div>
              {/* PAYMENT SECTION */}

              <div className="payment-section">

                <h2>Select Payment Method</h2>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={paymentMethod === "UPI"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  UPI Payment
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    checked={paymentMethod === "Card"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Debit / Credit Card
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    value="COD"
                    checked={paymentMethod === "COD"}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />
                  Cash on Delivery
                </label>

                {/* ---------- UPI ---------- */}

                {paymentMethod === "UPI" && (

                  <div className="upi-box">

                    <img
                      src={upiQR}
                      alt="UPI QR"
                      className="upi-qr"
                    />

                    <p className="upi-text">
                      Scan the QR using any UPI app
                      or enter your UPI ID below.
                    </p>

                    <input
                      type="text"
                      className="upi-input"
                      placeholder="Enter UPI ID"
                      value={upiId}
                      onChange={(e) =>
                        setUpiId(e.target.value)
                      }
                    />

                  </div>

                )}

                {/* ---------- CARD ---------- */}

                {paymentMethod === "Card" && (

                  <div className="card-box">

                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="card-input"
                    />

                    <input
                      type="text"
                      placeholder="Card Number"
                      maxLength="16"
                      className="card-input"
                    />

                    <div className="card-row">

                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="card-input"
                      />

                      <input
                        type="password"
                        placeholder="CVV"
                        maxLength="3"
                        className="card-input"
                      />

                    </div>

                  </div>

                )}

                {/* ---------- COD ---------- */}

                {paymentMethod === "COD" && (

                  <div className="cod-box">

                    <p>
                      Your order will be paid at the
                      time of delivery.
                    </p>

                  </div>

                )}
                <button
                  className="checkout-btn"
                  onClick={() => navigate("/checkout")}
                >
                  Place Order
                </button>


              </div>

            </div>

          </div>

        </>

      )}

    </div>

  );

};

export default Cart;