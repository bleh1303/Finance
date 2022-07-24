import {Link} from "react-router-dom";
import './styles.css';
import React,{useState} from 'react';
import { FaBars } from "react-icons/fa";
import Logo from './FinedLogo.png';
    
    
function NavBar(){
return(
  <>


    <div className="navbar navbar-expand-lg">
    <img className="logo" src={Logo} alt=""/>
      <a className="navbar-brand navlink" href="/">FinEd</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><FaBars /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-i">
            <Link className="navi" to="/">Home</Link>
          </li>
          <li className="nav-i">
            <Link className="navi" to="/about">About Us</Link>
          </li>
          <li className="nav-i">
            <Link className="navi" to="/blog">Blog</Link>
          </li>
          <li className="nav-i">
            <Link className="navi" to="/chatbot">Contact Us</Link>
          </li>
          <li className="nav-i">
            <Link className="navi" to="/blog">Blog</Link>
          </li>
          <li>
          <Link className="navi" to="/dashboard">
            <button type="button" className="btn">Dashboard</button>
            </Link>
          </li>
        </ul>
    </div>
    </div>
</>
);
}

export default NavBar;
