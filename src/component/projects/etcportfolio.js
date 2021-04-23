import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import './etcportfolio.scss'

import etcProjects from '../../etcprojects.json'
import ViewMoreBtn from './ViewMore'

function PageEtcPortfolio() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
   
    return(

        <div className="etc-container">
            {etcProjects.map((projectDetail, index)=>{

                return  <div data-aos="fade-up"
                        className="etc-row">
                            <div className="row-header">
                                <p>
                                    {projectDetail.name}
                                </p>
                            </div>
                            <div className="row-body">
                                <p>
                                    {projectDetail.description}
                                </p>
                                <h5>
                                    {projectDetail.technologies}
                                </h5>
                            </div>
                            <div className="row-ftr">
                                <a href={projectDetail.repository} target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href={projectDetail.link} target="_blank" rel="noreferrer">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                
                
                
        
            })}
            <ViewMoreBtn />
        </div>
    )
}


export default PageEtcPortfolio;