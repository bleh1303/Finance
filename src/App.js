import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Topics from './components/Topics.js';
import Topic from './components/Topic.js';
import Dashboard from './components/Dashboard.js';
import Blog from './components/Blog.js';
import Create from './components/Create.js';
import './App.css';
import React,{useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { DataController } from "./components/DataController";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

const API_ACCESS_KEY = "YOUR_API_ACCESS_KEY";
export const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_ACCESS_KEY}`;

function App() {
  return(
    <>
    <Router>
    <Routes>
    <Route path="/topic" element={<><NavBar/><Topic /></>}/>
    <Route path="/topics" element={<><NavBar/><Topics /></>}/>
    <Route path="/profile" element={<><NavBar/><Dashboard /></>}/>
    <Route path="/blog" element={<><NavBar/><Blog /></>}/>
    <Route path="/apiMoney" element={<><NavBar/><DataController url={API_URL} /></>}/>
    <Route path="/create" element={<><NavBar/><Create /></>}/>
    <Route path="/dashboard" element={<><NavBar/><Dashboard /></>}/>
    <Route path="/chatbot" element={<><NavBar/>    <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          
        />
        </>}/>
    <Route path="/" element={<><NavBar/><Home /></>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
