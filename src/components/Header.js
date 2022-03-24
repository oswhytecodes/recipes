import React, { useState } from "react";
import "./Header.css";
import Menu from "../assets/images/menu.png";

const Header = () => {
  const showMenu = () => {
    let nav = document.querySelector(".nav-list");

    nav.classList.toggle("active");
  };

  return (
    <nav>
      <h3 className="logo"> RECIPES </h3>
      <ul className="nav-list">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Recipes">Recipes</a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Recipe_Book">Recipe Book</a>
        </li>
        <li>
          <a href="#Shop">Shop</a>
        </li>
        <li>
          <a href="#Search">Search</a>
        </li>
      </ul>
      <img onClick={showMenu} className="menu-burger" src={Menu} alt="" />
    </nav>
  );
};

export default Header;
