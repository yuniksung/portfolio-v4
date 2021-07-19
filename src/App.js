import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

// Pages
import Projects from "./component/Projects/Projects"
import Hero from './component/Hero/Hero'
import About from './component/about/About'

// Components
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";


import "./App.scss"; 

function App() {


  return (

    <div>
        <Nav />
        <Hero />
        <About />
        <Projects/>
        <Footer />
        
    </div>
  );
}

export default App;
