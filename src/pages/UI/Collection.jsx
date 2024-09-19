import React, { useEffect, useState } from "react";
  import Navbar from "./Navbar";
  import "./Collection.css";
  import axios from "axios";
  import { useCart } from "react-use-cart";
  import { NavLink } from "react-router-dom";
  
  const Collection = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const { addItem } = useCart();
    useEffect(() => {
      const fetchShoes = async () => {
        try {
          const response = await axios.get(
            "https://wandering-plume-damselfly.glitch.me/api/admin/shoes"
          );
          // console.log(response.data);
          setShoes(response.data);
        } catch (error) {
          setError("Failed to fetch shoes");
        } finally {
          setLoading(false);
        }
      };
  
      fetchShoes();
    }, []);
  
    // if (loading)
    //   return (
    //     <div style={{ textAlign: "center", fontSize: "2rem" }}>Loading...</div>
    //   );
    // if (error)
    //   return <div style={{ textAlign: "center", fontSize: "2rem" }}>{error}</div>;
    return (
      <>
        <Navbar />
        <div className="my-container">
          {shoes.map((shoe) => (
            <div key={shoe._id} className="my-col-card">
              <div className="my-col-con">
                <img src={shoe.imageUrl} alt={shoe.name} className="my-col-img" />
                <p>{shoe.name}</p>
                <p>{shoe.brand}</p>
                <p>{shoe.price}</p>
                <button
                className="btn"
                  onClick={() => {
                    addItem({
                      id: shoe._id, // Ensure 'id' is present
                      name: shoe.name,
                      price: shoe.price,
                      image: shoe.imageUrl,
                      quantity: 1, // Default quantity
                    });
                    alert(`Added ${shoe.name} to cart!`);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>






        <div className="footer">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
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
              <i class="fa-brands fa-google-play"></i>
              <p>Download it from <br /> GOOGLE PLAY</p>
            </div>

            <div className="download-app">
              <i class="fa-brands fa-apple"></i>
             <p >Download it from <br /> APP STORE</p>
            </div>

          </div>

        </div>

      </div>



      <div className="foo">
        <hr className="last"/>

        <div className="foo1">
          <div className="foo2">
           <p style={{color:"white"}}>Copyright © Ruiz 2019. All Right Reserved.</p>
          </div>

          <div className="foo3">
          <button style={{backgroundColor:"white",color:"blue",height:"40px"}}>VISA</button>
          <button style={{backgroundColor:"white",color:"red",height:"40px"}}>PAYTM</button>
          <button style={{backgroundColor:"white",color:"green",height:"40px"}}>G-PAY</button>
          <button style={{backgroundColor:"white",color:"black",height:"40px"}}>PayPal</button>
          </div>
        </div>
      </div>
      </>
    );




   
  };

  
  export default Collection;