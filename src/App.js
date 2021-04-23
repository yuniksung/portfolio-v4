import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";

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

  useEffect(() => {
    Aos.init({
        duration: 2000
    });
}, []);

  return (
  <Router>

    <div>
      <AppNav />
        <Hero />
        <Appeal />

        <h1 data-aos="fade-in"
        className="h1">
          Projects
        </h1>
        <Projects />
        <h1 data-aos="fade-in"
        className="h1">
          Other Projects
        </h1>
        <Etcportfolio />
        <AppStickyMenu />
        <AppFooter />
        
    </div>
  </Router>
  );
}

export default App;
