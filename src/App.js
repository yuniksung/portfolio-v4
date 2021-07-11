import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import "aos/dist/aos.css";

// // Pages
// import Projects from "./component/projects/projects"
// import Etcportfolio from './component/projects/etcportfolio'
import Hero from './component/Hero/Hero'
import About from './component/About/About'

// Components
import AppNav from "./component/Nav/AppNav";
import AppFooter from "./component/Footer/AppFooter";


import "./App.scss";

function App() {


  return (

    <div>
        <AppNav />

        {/* Sections */}

        {/* This tag is a fake, it's standing here just for the scroll id of 'hero' */}
        <h2  id="hero"
        className="h2">
        </h2>
        <Hero id="hero" />

        <h2  id="About"
        className="h2">
        </h2>
        <About id="About" />
        
        <h1  id="projects"
        className="h1">
          Projects
        </h1> 
        {/* <Projects/> */}

        {/* Global components */}
        <AppFooter />
        
    </div>
  );
}

export default App;
