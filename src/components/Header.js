import React, { useState } from "react";
import './Header.css';
import Menu from '../assets/images/menu.png'

const Header = () => {
    return (
    <nav>
     <h3 className="logo"> RECIPES </h3>
     <ul className="nav-list">
       <li><a href="#">Home</a> </li>
       <li><a href="#">Pages</a> </li>
       <li><a href="#">Elements</a></li>
       <li><a href="#">Portfolio</a></li>
       <li><a href="#">Blog</a></li>
       <li><a href="#">Shop</a></li>
       <li><a href="#">Search</a> </li>
     </ul>
     <img className="menu-burger" src={Menu} alt="" />
     </nav>
  ); 
  };

export default Header;
