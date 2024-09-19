import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <li className="dialogue-text">WatchWorx</li>
            <input type="checkbox" id="check" />
            <span className="menu">
              <li className="menu-li">
                <NavLink to="/" className="navlink-text">
                  New & Featured
                </NavLink>
              </li>
              <li className="menu-li">
                <NavLink to="/Collection" className="navlink-text">
                  Collections
                </NavLink>
              </li>

              <li className="menu-li">
                <NavLink to="/cart" className="navlink-text ">
                  Cart  <i class="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>

              <label htmlFor="check" className="close-menu">
                <i className="fas fa-times"></i>
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
