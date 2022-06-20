import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Topics from './components/Topics.js';
import Topic from './components/Topic.js';
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
    <Route path="/" element={<><NavBar/><Home /></>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
