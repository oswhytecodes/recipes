import React, { useState } from "react";
import "./Header.css";
import Menu from "../assets/images/menu.png";

const Header = () => {

  const showMenu = () => {
    let nav = document.querySelector(".nav-list");

    nav.classList.toggle("active");
  };
  let hideMenu = () => {
    let links = document.getElementsByTagName('li')
    let nav = document.querySelector(".nav-list");

   
      nav.classList.toggle("active")
  
  }

  return (
    <nav>
      <a className="logo" href="">
        <h3> RECIPES </h3>
      </a>
      <ul className="nav-list">
        <li onClick={hideMenu}>
          <a href="#Home">Home</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Services">Services</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Recipes">Recipes</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#About">About Us</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Recipe_Book">Recipe Book</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Shop">Shop</a>
        </li>
        <li onClick={hideMenu}>
          <a href="#Search">Search</a>
        </li>
      </ul>
      <img onClick={showMenu} className="menu-burger" src={Menu} alt="" />
    </nav>
  );
};

export default Header;
