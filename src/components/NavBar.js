import {Link} from "react-router-dom";
import './styles.css';
import React,{useState} from 'react';
import { FaBars } from "react-icons/fa";

function NavBar(){

return(
  <>


    <div className="navbar navbar-expand-lg">
<img className="logo"src="" alt="" />
      <a className="navbar-brand navlink" href="/">Finance</a>
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
            <Link className="navi" to="/footer">Contact Us</Link>
          </li>
          <li>
            <button type="button" className="btn">Sign Up</button>

          </li>
        </ul>
    </div>
    </div>
</>
);
}

export default NavBar;
