import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import './Header.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />}/>
          
        
        <Route path="/login" element={<Login />}/>
          
        
        <Route path="/" element={<Home/>}/>
          
        
          
         
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
