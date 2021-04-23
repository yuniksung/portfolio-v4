import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

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
  <Router>

    <div>
      <AppNav />
        <Hero />
        <Appeal />

        <h1 className="h1">
          Projects
        </h1>
        <Projects />
        <h1 className="h1">
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
