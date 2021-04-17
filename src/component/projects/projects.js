import React from "react";
import './projects.scss'
import ProjectData from '../../projects.json'

function Projects() {



    return(

        <div className="projects-container">
            {ProjectData.map((projectDetail, index)=>{


                return <div className="project-box">
                            
                            <div className="project-pic">
                                <img source={projectDetail.picture}
                                alt={projectDetail.name}/>
                            </div>
                            <div className="project-text">
                                <div className="p1">
                                    <h1>{projectDetail.name}</h1>
                                    <p>{projectDetail.description}</p>
                                </div>
                            
                                <div className="p2">
                                    <p>
                                        {projectDetail.technologies}
                                    </p>
                                </div>
                                <div className="p3">
                                    <a href={projectDetail.repository} target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href={projectDetail.link} target="_blank" rel="noreferrer">
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
            })}
        </div>
    )
}

export default Projects;