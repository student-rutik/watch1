import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart } =
    useCart();

  console.log(items); // To check the structure of items

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const handlePayment = () => {
    alert("Thank you for your purchase!");
    navigateToHome();
    emptyCart();
  };

  return (
    <>
      <Navbar />
      <h1 className="cart-tag">Cart ({totalUniqueItems})</h1>
      <ul className="cart-container">
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {/* Ensure using item.id */}
            <div className="products-cart">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <span>
                  {item.quantity} x {item.name}
                </span>
                <div className="cart-btn-container">
                  <button
                    className="cart-edit-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="cart-edit-btn"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className="cart-edit-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {totalUniqueItems > 0 && (
        <button className="payment-button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      )}


      <div className="footer">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p className="address">
            Address: 123 Main Street, Anytown, CA 12345 - USA.
            <br />
            Phone: (012) 800 000 789
            <br />
            Fax: (012) 800 888 789
            <br />
            Email: demo@hashthemes.com
          </p>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li>
            <NavLink to="/" >
                  New & Featured
                </NavLink>
            </li>
            <li>
            <NavLink to="/Collection" >
                  Collections
                </NavLink>
                </li>
            <li>
            <NavLink to="/cart" >
                  Cart  <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get The App</h3>
          <div className="down">
            <div className="download-play">
              <i className="fa-brands fa-google-play"></i>
              <p>Download it from <br /> GOOGLE PLAY</p>
            </div>
            <div className="download-app">
              <i className="fa-brands fa-apple"></i>
              <p>Download it from <br /> APP STORE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="foo">
        <hr className="last" />
        <div className="foo1">
          <div className="foo2">
            <p style={{ color: "white" }}>Copyright © Ruiz 2019. All Rights Reserved.</p>
          </div>
          <div className="foo3">
            <button style={{ backgroundColor: "white", color: "blue", height: "40px" }}>VISA</button>
            <button style={{ backgroundColor: "white", color: "red", height: "40px" }}>PAYTM</button>
            <button style={{ backgroundColor: "white", color: "green", height: "40px" }}>G-PAY</button>
            <button style={{ backgroundColor: "white", color: "black", height: "40px" }}>PayPal</button>
          </div>
        </div>
      </div>

    </>
  );
}