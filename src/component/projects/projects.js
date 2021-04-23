import React from "react";
import './projects.scss'
import ProjectData from '../../projects.json'

function Projects() {



    return(

        <div className="projects-container" id="projects">
            {ProjectData.map((data, index)=>{


                return <div className="project-box">
                            
                            <div className="project-pic">
                                <img src={data.picture}
                                alt={data.name}
                                key={data.name} />
                            </div>
                            <div className="project-text">
                                <div className="p1">
                                    <h1>{data.name}</h1>
                                    <p>{data.description}</p>
                                </div>
                            
                                <div className="p2">
                                    <p>
                                        {data.technologies}
                                    </p>
                                </div>
                                <div className="p3">
                                    <a href={data.repository} target="_blank" rel="noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href={data.link} target="_blank" rel="noreferrer">
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