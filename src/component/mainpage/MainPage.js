import React, { Component } from "react";
import './MainPage.scss'

import Hero from '../Hero/Hero'
import Projects from '../projects/projects'
import Etcportfolio from '../projects/etcportfolio'

// Components

class MainPage extends Component{
    render() {
        return(
            <>
            <Hero />
            <h1 className="h1">Projects</h1>
            <Projects />
            <h1 className="h1">Other Projects</h1>
            <Etcportfolio />
            </>
        )
    }
}

export default MainPage;