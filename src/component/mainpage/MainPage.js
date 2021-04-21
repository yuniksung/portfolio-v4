import React from "react";
import './MainPage.scss'

import Hero from '../Hero/Hero'
import PageAboutMe from '../about/PageAboutMe'
import Projects from '../projects/projects'
import Etcportfolio from '../projects/etcportfolio'
// import ScrollToTop from "./scroll/scroll"


// Components

export default function MainPage(){


    return(
        <>
        <Hero />
        {/* <h1 className="h1"></h1> */}
        {/* <PageAboutMe /> */}
        <h1 className="h1">Projects</h1>
        <Projects />
        <h1 className="h1">Other Projects</h1>
        <Etcportfolio />
        </>
    )
}

