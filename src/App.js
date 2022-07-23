import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Topics from './components/Topics.js';
import Topic from './components/Topic.js';
import Dashboard from './components/Dashboard.js';
import Blog from './components/Blog.js';
import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
  return(
    <>
    <Router>
    <Routes>
    <Route path="/topic" element={<><NavBar/><Topic /></>}/>
    <Route path="/topics" element={<><NavBar/><Topics /></>}/>
    <Route path="/profile" element={<><NavBar/><Dashboard /></>}/>
    <Route path="/blog" element={<><NavBar/><Blog /></>}/>
    <Route path="/" element={<><NavBar/><Home /></>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
