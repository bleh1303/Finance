import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import data from "./Blog.json";
import "./api.css";
function ChatSpace() {

  return (
    <>
    
    <div className="row fullblog">
    <div className='right col-md-3'>
     <div className="right-box-top">      
        <h1>Let Us Know About Your Story!</h1>
        <Link to="/create"> <button className='btn btn-primary'>Create Post</button> </Link>
     </div>
    
     
    </div>
    <div className="blogPage col-md-9">
      
      {data.map((item) => (
        <div className='post'>
        <div class="card-block px-2 card-textpart">
          <div className='postHeader title'>
            <h4 class="card-title">{item.heading}</h4>
            </div>
            <div className='postTextContainer'>
            <p class="card-text">{item.para}</p>
            </div>
            <div className='authorname'>
            <p class="card-text">{item.authorname}</p>
            </div>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
        {item.authorname} is a {item.spec}.
        </div>
        </div>
        
    ))
    }
      
    </div>
    <div className='right col-md-3'>
     <div className="right-box-top">      
        <h1>Let Us Know About Your Story!</h1>
        <Link to="/create"> <button className='btn btn-primary'>Create Post</button> </Link>
     </div>
    
     
    </div>
    </div>

    </>
  );
}

export default ChatSpace;
