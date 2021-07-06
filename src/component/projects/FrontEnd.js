import React from "react";

import FrontEndData from '../../ProjectData/FrontEnd.json'

import {
ProjectContainer,
ProjectTitle,
ProjectBox,
ProjectPic,
ProjectText,
P1,
P2,
P3,
ProjectImg,
ProjectName,
PositionSpan,
ProjectPosition,
ProjectDescription,
ProjectTech,
ProjectIcon,
ProjectLink

} from './AllProjectElement'

function FrontEnd() {
    return(

        <ProjectContainer>
            <ProjectTitle>Front End Projects</ProjectTitle>
            {FrontEndData.map((data, index)=>{
                return <ProjectBox key={index}
                // data-aos="fade-up" 
                className="project-box">
                            
                            <ProjectPic>
                                <ProjectImg
                                src={data.picture}
                                alt={data.name} />
                            </ProjectPic>
                            <ProjectText>
                                <P1>
                                    <ProjectName>{data.name}</ProjectName>
                                    <ProjectPosition>
                                        <PositionSpan>Position:</PositionSpan> {data.position}
                                    </ProjectPosition>
                                    <ProjectDescription>{data.description}</ProjectDescription>
                                </P1>
                            
                                <P2>
                                    <ProjectTech>
                                        {data.technologies}
                                    </ProjectTech>
                                </P2>
                                <P3>
                                    <ProjectLink href={data.repository} 
                                    target="_blank" 
                                    rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </ProjectLink>
                                    <ProjectLink href={data.link} 
                                    target="_blank" 
                                    rel="noreferrer">
                                        <ProjectIcon className="fas fa-external-link-alt"></ProjectIcon>
                                    </ProjectLink>
                                </P3>

                            </ProjectText>
                        </ProjectBox>
            })}
        </ProjectContainer>
    )
}

export default FrontEnd;