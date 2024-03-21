import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login"); // ** When this line is called whole Header is again rendered. issiliye btnNameReact ki value change ho jaati hai even tho it is a const.
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
