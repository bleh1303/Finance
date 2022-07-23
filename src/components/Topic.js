import {Link} from "react-router-dom";
import './styles.css';
import './Topic.css';
import React,{useState} from 'react';
import img from './images/bg.png';
import bank from './images/bank.webp';
import invest from './images/invest.jpg';
import loan from './images/loan.webp';
import risk from './images/risk.webp';
import Video from './Video.js';
function Topic(){


return(
  <>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
                <a class="nav-link" href="#">Notes</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto my-2 order-0 order-md-1 position-relative">
        <a class="mx-auto" href="#">
            <img src="//placehold.it/120/ccff00" class="rounded-circle" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
</nav>

<div className="row">   

<div className="video col-sm-9">
<Video />
</div>

<div id="wrapper" className="col-sm-3">
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav nav navbar navbar-inverse writing">
            <h2 className="content">CONTENT:</h2>
      <div id="sidenavbarSupportedContent">
            <li>
             1. Introduction to Investments:
             <ul>
             <li><Link className="content-link" to="/topic">What are investments?</Link>
             </li>
             <li>How can I start investing?
             </li>
             </ul>
            </li>
            <li>
             2. Stocks:
             <ul>
             <li>The Stock Market
             </li>
             <li>Tips on how to play with stocks
             </li>
             </ul>
            </li>
            <li>
             3. Mutual Funds and ETFs:
             <ul>
             <li>Mutual Fund vs. ETF
             </li>
             <li>Should you invest in both ETFs and mutual funds?
             </li>
             </ul>
            </li>
            </div>
        </ul>
    </div>

    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
            </div>
        </div>
    </div>

</div> 
</div>

  </>
);
}


export default Topic;
