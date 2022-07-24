import {Link} from "react-router-dom";
import './styles.css';
import './Home.css';
import React,{useState} from 'react';
import about from './images/about.png';
import Carousel from './Carousel.js';

function Home(){


return(
  <div className="landing">
  <div className="home">
  <div className="heading">
  <h1>The Key To Financial Literacy</h1>
  <Link to="/topics">
  <button type="button" className="btn big-btn">Get Started With Us →</button>
  </Link>
  </div>
  </div>
  <section id="about">
  <div className="row">
  <div className="col-md-6">
  <h2>About Us</h2>
  <p>FinEd is your very own financial guru. We want to get you comfortable talking about all things MONEY. We are here with 30+ finance courses to make you an expert in the finance sector. Get ready to get your hands on every single finance related topic in the market. Loans, investments, the fundementals of banking, steps to start a business, risk management, you name it, we got it. </p>
  <p>Through FinEd, you gain access to videos created by professionals and you can also work with certified financial planners who are commited yo help you reach your finance goals. We also provide clear strategies to manage budgets, payback loans and to get your hands on loads of money! </p>
  </div>
  <div className="col-md-6">
  <img class="image" alt="" src={about} />
  </div>
  </div>
  </section>
  <section id="features">
  <h2 className="header">OUR FEATURES</h2>
  <div class="wrapper">
  <section id="ft">
  <div className="ft ft1">
  <div className="f1">
  <div className="circle">

  </div>
  <div className="para">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </p>
  </div>
  </div>
  </div>
  </section>
  </div>
  <div className="ft ft2">
  <div className="f2">
  <div className="circle">

  </div>
  <div className="para">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </p>
  </div>

  </div>
  </div>
  <div className="ft ft3">
  <div className="f3">
  <div className="circle">

  </div>
  <div className="para">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. </p>
  </div>

  </div>
  </div>
  </section>
  <section id="testimonials">
  <h2 className="header">Testimonials</h2>
<Carousel />
  </section>

  </div>
);
}

export default Home;
