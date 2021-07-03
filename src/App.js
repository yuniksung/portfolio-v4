import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Aos from "aos";

import { GlobalStyle } from './globalStyles';
import { AosH1 } from './AppElement'

import "aos/dist/aos.css";

// Pages
import Projects from "./component/projects/projects"
import Etcportfolio from './component/projects/etcportfolio'
import Hero from './component/Hero/Hero'

// Components
import AppNav from "./component/App-component/AppNav";
import AppStickyMenu from "./component/App-component/AppStickyMenu";
import AppFooter from "./component/App-component/AppFooter";


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
        
        <AosH1  id="projects">
          Projects
        </AosH1>
        <Projects data-aos="fade-in"/>

        <AosH1 id="etcprojects">
          Other Projects
        </AosH1>
        <Etcportfolio data-aos="fade-in"/>

        {/* Global components */}
        <AppStickyMenu />
        <AppFooter />
        
    </Router>
  );
}

export default App;
