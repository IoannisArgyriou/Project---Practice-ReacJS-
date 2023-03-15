import React from "react";
import Logo from '../images/react-logo.png';

function Navbar(){
  return (
    <nav>
        <img src={Logo} alt="React-Image" className="react-icon" />
        <h3 className="nav-logo-text">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar;