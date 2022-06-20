import {Link} from "react-router-dom";
import './styles.css';
import './Topic.css';
import React,{useState} from 'react';
import img from './images/bg.png';
import bank from './images/bank.webp';
import invest from './images/invest.jpg';
import loan from './images/loan.webp';
import risk from './images/risk.webp';

function Topic(){


return(
  <>
  <div id="wrapper">
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav nav navbar-inverse writing">
            <h2>CONTENT:</h2>
            <li>
             1.Introduction to Investments:
             <ul>
             <li>What are investments?
             </li>
             <li>How can I start investing?
             </li>
             </ul>
            </li>
            <li>
             2.Stocks:
             <ul>
             <li>The Stock Market
             </li>
             <li>Tips on how to play with stocks
             </li>
             </ul>
            </li>
            <li>
             3.Mutual Funds and ETFs:
             <ul>
             <li>Mutual Fund vs. ETF
             </li>
             <li>Should you invest in both ETFs and mutual funds?
             </li>
             </ul>
            </li>
        </ul>
    </div>

    <div id="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
            </div>
        </div>
    </div>

</div>
<div className="video">
<h1>Video coming soon</h1>
</div>
<div className="bottom">
<h2>HOW TO GET STARTED ON INVESTMENTS</h2>
<p>Investing your money is the most reliable way to build wealth over time. If you’re a first-time investor, we’re here to help you get started. Before you put your hard-earned cash into an investment vehicle, you’ll need a basic understanding of how to invest your money the right way. However...</p>
</div>
  </>
);
}


export default Topic;
