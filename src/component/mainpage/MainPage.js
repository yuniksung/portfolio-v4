import React, { Component } from "react";
import './MainPage.scss'

import Hero from '../Hero/Hero'
import About from '../about/PageAboutMe'

// Components

class MainPage extends Component{
    render() {
        return(
            <>
            <Hero />
            <About />
            </>
        )
    }
}

export default MainPage;