import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Aos from "aos";

import { GlobalStyle } from './globalStyles';
import { AosH1 } from './AppElement'

import "aos/dist/aos.css";

// Components
import Projects from "./component/projects/projects"
// import Etcportfolio from './component/projects/etcportfolio'
import Hero from './component/Hero/Hero'
import About from './component/about/About'

import AppNav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";


import "./App.scss";

function App() {

//   useEffect(() => {
//     Aos.init({
//         duration: 2000
//     });
// }, []);

  return (

    <Router>
      <GlobalStyle />
        <AppNav />
        <Hero id="hero"/>
        <About id="About" />
        <Projects id="project" />
        <Footer />
        
    </Router>
  );
}

export default App;
