import React, { useState } from "react";
import './Header.css';
import Menu from '../assets/images/menu.png'


const Header = () => {
  


const showMenu = () => {
    let menu = document.querySelector(".menu-burger");
    let nav = document.querySelector(".nav-list");
    
  menu.classList.toggle('active');
  nav.classList.toggle('active')
}

 

    return (
    <nav>
     <h3 className="logo"> RECIPES </h3>
     <ul className="nav-list">
       <li><a href="#">Home</a> </li>
       <li><a href="#">Services</a> </li>
       <li><a href="#">Recipes</a></li>
       <li><a href="#">About Us</a></li>
       <li><a href="#">Recipe Book</a></li>
       <li><a href="#">Shop</a></li>
       <li><a href="#">Search</a> </li>
     </ul>
     <img onClick={showMenu} className="menu-burger" src={Menu} alt="" />
     </nav>
  ); 
  };

export default Header;
