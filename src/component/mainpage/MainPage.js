import React, { Component } from "react";
import './MainPage.scss'

import Hero from '../Hero/Hero'
import Projects from '../projects/projects'

// Components

class MainPage extends Component{
    render() {
        return(
            <>
            <Hero />
            <h1 className="h1">Projects</h1>
            <Projects />
            </>
        )
    }
}

export default MainPage;