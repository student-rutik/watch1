import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import File from "./File";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

export default function Homepage() {
  function MultipleItems() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slider-container">
        <h2 style={{ marginTop: "20px" }}>Best Seller Products</h2>

        <Slider {...settings}>
          {[
            "product-02.png",
            "product-03.png",
            "product-04.png",
            "product-10.png",
            "product-08.png",
            "product-02.png"
          ].map((product, index) => (
            <div className="slider-item" key={index}>
              <img
                src={`https://htmldemo.net/ruiz/ruiz/assets/images/product/${product}`}
                alt={`Slide ${index + 1}`}
              />
              <div className="slider-text">
                <h5>Watch One</h5>
                <p>$5,859</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
      <div style={{ position: "relative" }}>
        <img
          src="https://images.unsplash.com/photo-1542816340-4d3de5047cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w0NDYyNzM4fHxlbnwwfHx8fHw%3D"
          alt="Watch Image"
          style={{ width: "100%", height: "654px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h1>WatchWorx</h1>
          <p>Exclusive Offer -20% Off This Week</p>
          <h2>H-Vault Classico</h2>
          <p>
            H-Vault Watches Are A Lot Like Classic American Muscle Cars - Except
            For The American Part That Is.
          </p>
          <p>Starting At $5,500</p>
          <NavLink to="/Collection">
            <button className="shop-button">Shop</button>
          </NavLink>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <img
            src="https://htmldemo.net/ruiz/ruiz/assets/images/banner/banner-01.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://htmldemo.net/ruiz/ruiz/assets/images/banner/banner-02.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Best Seller */}
      <MultipleItems />

      {/* Two Cards */}
      <div className="card-container card-container2">
        <div className="card">
          <img
            src="https://htmldemo.net/ruiz/ruiz/assets/images/banner/banner-03.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://htmldemo.net/ruiz/ruiz/assets/images/banner/banner-04.jpg"
            alt=""
          />
        </div>
      </div>

<File/>

      <div className="single">
        <div className="img">
          <img
            src="https://htmldemo.net/ruiz/ruiz/assets/images/product/single-product-item.jpg"
            alt=""
          />
          <div className="overlay">Brand Is Brand</div>
        </div>

        <div className="info">
          <h2>Watch Single Product</h2>
          <h2>$700.00</h2>
          <p>
            Unveil the essence of sophistication with our latest watch
            collection. Crafted with meticulous attention to detail, each piece
            reflects a perfect blend of style and functionality. The sleek,
            modern design complements any attire, while the precision-engineered
            movement ensures unmatched accuracy.
          </p>
          <button>Add</button>
        </div>
      </div>
      <hr className="half" />

      <div className="news">
        <div className="news1">
          <h2 style={{color:"red"}}>Join Our</h2>
          <h2>Newsletter Now</h2>
        </div>
        <div className="news2">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

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
