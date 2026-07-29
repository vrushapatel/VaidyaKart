import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import upiQR from "../assets/Scan.svg";
import axios from "axios";
const Checkout = ({
  cart,
  setCart,
  setOrderBill
}) => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "COD"
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const totalItems = cart.reduce(
  (total, item) => total + (item.quantity || 1),
  0
);
const subtotal = cart.reduce(
  (total, item) =>
    total + item.price * (item.quantity || 1),
  0
);

  const delivery = subtotal > 999 ? 0 : 10;

  const total = subtotal + delivery;

  const handleChange = (e) => {

    setError("");

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

const placeOrder = async () => {

  setError("");

  if (cart.length === 0) {
    setError("Your cart is empty.");
    return;
  }


  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.address.trim()
  ) {

    setError("Please fill all the details.");
    return;

  }


  if (!/\S+@\S+\.\S+/.test(form.email)) {

    setError("Please enter a valid email address.");
    return;

  }


  if (!/^\d{10}$/.test(form.phone)) {

    setError("Phone number must contain exactly 10 digits.");
    return;

  }


  setLoading(true);


  const order = {

    orderId: "VF" + Date.now(),

    customer: {

      fullName: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      payment: form.payment

    },

    items: cart,

    subtotal,

    delivery,

    total,

    status: "placed",

    rating: 0,

    orderDate: new Date()
      .toLocaleDateString("en-IN"),


    deliveryDate: new Date(
      Date.now() + 2 * 24 * 60 * 60 * 1000
    )
      .toLocaleDateString("en-IN")

  };


  try {


    const res = await axios.post(
      "http://localhost:5000/api/orders/place",
      order
    );


    console.log(
      "Order Response:",
      res.data
    );


    const savedOrder = res.data.order;


    // Save Order Bill
    setOrderBill(savedOrder);


    localStorage.setItem(
      "orderBill",
      JSON.stringify(savedOrder)
    );


    // Clear Cart
    setCart([]);


    localStorage.setItem(
      "cart",
      JSON.stringify([])
    );


    // Go Tracking Page
    navigate("/tracking");


  } 


  catch(err) {


    console.log(
      "FULL ERROR:",
      err
    );


    if(err.response){


      console.log(
        "STATUS:",
        err.response.status
      );


      console.log(
        "DATA:",
        err.response.data
      );


      setError(
        err.response.data.message ||
        "Order failed"
      );


    }


    else{


      console.log(
        err.message
      );


      setError(
        "Backend is not running."
      );


    }


  }


  finally{

    setLoading(false);

  }


};

  return (

    <div className="checkout-page">

      <h1>
        Checkout 🛍️
      </h1>

      <div className="checkout-container">

        {/* Left Side Starts */}
                {/* LEFT SIDE */}

        <div className="customer-box">

          <h2>Delivery Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            maxLength={10}
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
          />

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
          >
            <option value="COD">
              Cash On Delivery
            </option>

            <option value="UPI">
              UPI Payment
            </option>

            <option value="CARD">
              Debit / Credit Card
            </option>
          </select>

          {/* UPI PAYMENT */}

          {form.payment === "UPI" && (

            <div className="payment-box">

              <h3>Scan UPI QR</h3>

              <img
                src={upiQR}
                alt="UPI QR"
                className="upi-qr"
              />

              <p>
                Scan the QR and complete payment.
              </p>

              <input
                type="text"
                placeholder="Enter UPI Transaction ID"
              />

            </div>

          )}

          {/* CARD PAYMENT */}

          {form.payment === "CARD" && (

            <div className="payment-box">

              <h3>Card Details</h3>

              <input
                type="text"
                placeholder="Card Number"
                maxLength={16}
              />

              <input
                type="text"
                placeholder="Card Holder Name"
              />

              <div className="card-row">

                <input
                  type="text"
                  placeholder="MM/YY"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  maxLength={3}
                />

              </div>

            </div>

          )}

          {error &&

            <p className="error">

              {error}

            </p>

          }

          <button

            className="place-order-btn"

            onClick={placeOrder}

            disabled={loading}

          >

            {

              loading

              ?

              "Placing Order..."

              :

              "Place Order"

            }

          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="summary-box">

          <h2>
            Order Summary
          </h2>

          <p>

  <span>
    Total Items
  </span>

  <span>
    {totalItems}
  </span>

</p>

          <p>

            <span>

              Subtotal

            </span>

            <span>

              ₹{subtotal.toFixed(2)}

            </span>

          </p>

          <p>

            <span>

              Delivery Charges

            </span>

            <span>

              {

                delivery === 0

                ?

                "FREE"

                :

                `₹${delivery}`

              }

            </span>

          </p>

          <hr />

          <h2>

            <span>

              Grand Total

            </span>

            <span>

              ₹{total.toFixed(2)}

            </span>

          </h2>

        </div>

      </div>

    </div>

  );

};

export default Checkout;