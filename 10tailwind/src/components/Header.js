import React from 'react';

import { useEffect, useState } from "../../node_modules/react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();


  //if no dependency array => useEffect is called on every render
  //if dependency array is empty => [] => useEffect is called on initial render(just once)
  //if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated.
  useEffect(()=> {
    console.log("useEffect called");
  }, [btnNameReact])

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sticky top-0">
      <div className="logo-container">
        <img className="w-16 py-2 ml-2" src={LOGO_URL}></img>
      </div>

      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className=' px-4'>Online Status : {onlineStatus ? "✅":"🔴"}</li>                        
        {/* difference b/w (a href) & (Link to) is the difference in performance. if we use anchor tag it will relaoad/refresh the whole page but Link hook will just follow reconciliation. */}
          <li className=' px-4'><Link to="/"> Home</Link></li>     
          <li className=' px-4'><Link to="/about">About Us</Link></li>
          <li className=' px-4'><Link to="/contact">Contact Us</Link></li>
          <li className=' px-4'>Cart</li>
          <li className=' px-4'><Link to="/grocery">Grocery</Link></li>
          <button
            className="login "
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
