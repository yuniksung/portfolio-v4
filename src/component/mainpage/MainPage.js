import React from "react";
import './MainPage.scss'

// Components
import Hero from '../Hero/Hero'
import Projects from '../projects/projects'
import Etcportfolio from '../projects/etcportfolio'
import AppFooter from "../App-component/AppFooter";


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
        <AppFooter />
        </>
    )
}

