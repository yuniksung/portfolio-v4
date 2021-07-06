import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";

import "aos/dist/aos.css";

// Pages
import Projects from "./component/projects/projects"
import Etcportfolio from './component/projects/etcportfolio'
import Hero from './component/Hero/Hero'
import Appeal from './component/Appeal/Appeal'

// Components
import AppNav from "./component/App-component/AppNav";
import AppStickyMenu from "./component/App-component/AppStickyMenu";
import AppFooter from "./component/App-component/AppFooter";


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
        <Appeal />
        
        <h1  id="projects"
        className="h1">
          Projects
        </h1>
        <Projects/>

        <h1 id="etcprojects"
        className="h1">
          Other Projects
        </h1>
        <Etcportfolio />

        {/* Global components */}
        <AppStickyMenu />
        <AppFooter />
        
    </div>
  );
}

export default App;
