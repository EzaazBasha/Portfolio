import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About/About";
import Skills from "./components/Skills";         
import Projects from "./components/Projects";
import Experience from "./components/Experience"; 
import Contact from "./components/Contact";
import LiveUnavailable from './components/LiveUnavailable';
import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />        
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} /> 
                <Route path="/contact" element={<Contact />} />
                <Route path="/live-unavailable" element={<LiveUnavailable />} />

            </Routes>
        </Router>
    );
}

export default App;
