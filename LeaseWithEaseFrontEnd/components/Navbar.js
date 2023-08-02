import { Component } from "react";
import React from 'react';
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "bootstrap/dist/css/bootstrap.min.css";
import logo6 from "./Images/logo6.png"
class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        
        <img src={logo6}  className="logo" height="80px" width="350px" ></img>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon} ></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
