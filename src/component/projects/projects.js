import React, { useState } from "react";
import Aos from "aos";
// import "aos/dist/aos.css";

import {
    ProjectContainer,
    BtnInst,
    ButtonsBox,
    RenderPage,
    RenderBtn
} from './ProjectsElement'

import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';
import FullStack from './FullStack';

function Projects() {
    const [isRendered, setIsRendered] = useState("FrontEnd")

    return(
        <ProjectContainer>
            <BtnInst>Click below to see more projects</BtnInst>
            <ButtonsBox>
                <RenderBtn onClick={()=> setIsRendered("FrontEnd")}>Front End</RenderBtn>
                <RenderBtn onClick={()=> setIsRendered("BackEnd")}>Back End</RenderBtn>
                <RenderBtn onClick={()=> setIsRendered("FullStack")}>Full Stack</RenderBtn>
            </ButtonsBox>


            <RenderPage>
                {isRendered === "FrontEnd" && <FrontEnd />}
                {isRendered === "BackEnd" && <BackEnd />}
                {isRendered === "FullStack" && <FullStack />}
            </RenderPage>
            
        </ProjectContainer>
    )
}

export default Projects;