import React, { useState } from "react";
import './Header.css';

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
     </nav>
  ); 
  };

export default Header;
