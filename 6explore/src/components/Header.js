import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  let [btnNameReact, ] = useState("Login"); //btn creation remaining

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnNameReact = "Logout";
            console.log(btnName);
          }}>
            {btnNameReact}

          </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
