import {Link} from "react-router-dom";
import './styles.css';
import './Topics.css';
import React,{useState} from 'react';
import img from './images/bg.png';
import bank from './images/bank.webp';
import invest from './images/invest.jpg';
import loan from './images/loan.webp';
import risk from './images/risk.webp';

function Topics(){


return(
  <>
  <div className="row rows">
  <div className="col-md-6 siden">
  <h2 className="bordered-head">HOW TO GET STARTED ON INVESTMENTS</h2>
  <div className="bordered">
  <img class="imge"  src={invest} />
  <p>Investing your money is the most reliable way to build wealth over time. If you’re a first-time investor, we’re here to help you get started. Before you put your hard-earned cash into an investment vehicle, you’ll need a basic understanding of how to invest your money the right way. However...</p>
  <div className="buttons">
  <Link to="/topic">
  <button type="button" className="btns">ENROLL NOW</button>
  </Link>
  </div>
  </div>
  </div>
  <div className="col-md-6 siden">
  <h2 className="bordered-head">THE FUNDAMENTALS OF BANKING</h2>
  <div className="bordered">
  <img class="imge"  src={bank} />
  <p>3-in-1 Banking, Banking Risk and Compliance Masterclass.
The essentials of the banking business (business model, compliance, others), financial risk management and compliance. Banking is an industry that deals with credit facilities, storage for cash, investments, and other financial transactions...</p>
  <div className="buttons">
  <Link to="/topic">
  <button type="button" className="btns">ENROLL NOW</button>
  </Link>
  </div>
  </div>
  </div>
  </div>
  <div className="row rows">
  <div className="col-md-6 siden">
  <h2 className="bordered-head">RISK MANAGEMENT AND INSURANCE</h2>
  <div className="bordered">
  <img class="imge"  src={risk} />
  <p>The first step in creating an effective risk-management system is to understand the qualitative distinctions among the types of risks that organizations face. Our field research shows that risks fall into one of three categories. Risk events from any category can be fatal to a company’s strategy and even to its survival...</p>
  <div className="buttons">
  <Link to="/topic">
  <button type="button" className="btns">ENROLL NOW</button>
  </Link>
  </div>
  </div>
  </div>
  <div className="col-md-6 siden">
  <h2 className="bordered-head">HOW TO CLEAR OFF YOUR LOANS</h2>
  <div className="bordered">
  <img class="imge"  src={loan} />
  <p>There are three truths to debt:

Getting into it can be fun.
Getting out of it is not.
It’s worth that effort.
That’s because being in debt is like living under a dark cloud. Getting out from under debt can be life changing. Millions of people have done it, so why not join them?

But know that it means more than paying off credit cards. It means changing your spending habits...</p>
  <div className="buttons">
  <Link to="/topic">
  <button type="button" className="btns">ENROLL NOW</button>
  </Link>
  </div>
  </div>
  </div>

  </div>
  </>
);
}

export default Topics;
