import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Aos from "aos";

import { GlobalStyle } from './globalStyles';
import { AosH1 } from './AppElement'

import "aos/dist/aos.css";

// Components
import Projects from "./component/projects/projects"
import Etcportfolio from './component/projects/etcportfolio'
import Hero from './component/Hero/Hero'
import About from './component/about/About'

import AppNav from "./component/Nav/Nav";
import AppFooter from "./component/Footer/Footer";


import "./App.scss";

function App() {

  useEffect(() => {
    Aos.init({
        duration: 2000
    });
}, []);

  return (

    <Router>
      <GlobalStyle />
        <AppNav />

        {/* Sections */}

        {/* This tag is a fake, it's standing here just for the scroll id of 'hero' */}
        <Hero id="hero" data-aos="fade-out"/>
        <About />
        <AosH1  id="projects">
          Projects
        </AosH1>
        <Projects data-aos="fade-in"/>

        <AosH1 id="etcprojects">
          Other Projects
        </AosH1>
        <Etcportfolio data-aos="fade-in"/>

        {/* Global components */}
        <AppFooter />
        
    </Router>
  );
}

export default App;
