import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <a className="navlink" href="miphones">
        Mi Phone
      </a>
      <a className="navlink" href="redmiphones">
        Redmi Phone
      </a>
      <a className="navlink" href="tv">
        TV
      </a>
      <a className="navlink" href="laptops">
        Laptop
      </a>
      <a className="navlink" href="fitness">
        Fitness & Lifestyle
      </a>
      <a className="navlink" href="home">
        Home
      </a>
      <a className="navlink" href="audio">
        Audio
      </a>
      <a className="navlink" href="accessories">
        Accessories
      </a>

      <div className="searchbox">
        <input type="text" name="search" placeholder="Serach Products" />
      </div>
    </div>
  );
};

export default Navbar;
