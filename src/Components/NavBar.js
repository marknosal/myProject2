import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
      display: "inline-block",
      width: "50px",
      padding: "12px",
      margin: "0 6px 6px",
      background: "red",
      textDecoration: "none",
      color: "white",
    };


  
    return (
      <div className="navbar">
        <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "pink", }}>Home</NavLink>
        <NavLink to="/about" exact style={linkStyles} activeStyle={{ background: "pink", }}>About</NavLink>
        <NavLink to="/gallery" exact style={linkStyles} activeStyle={{ background: "pink", }}>Gallery</NavLink>
        <NavLink to="/contact" exact style={linkStyles} activeStyle={{ background: "pink", }}>Contact</NavLink>
        
      </div>
    )
  }
  
  export default NavBar;