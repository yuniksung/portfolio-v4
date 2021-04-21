import React, { Component } from "react";

import './PageAboutMe.scss'

class Hero extends Component{

    render() {

        

        return(
            <div className="aboutme-container">

                <div className="aboutme-wrapper">
                    <div className="single-box">
                        <div className="body-area">
                            <h5>
                            Here are Technologies I am Capable of:
                            </h5>

                            <div className="skills-order">
                                <ul>
                                    <li>html/css</li>
                                    <li>SASS</li>
                                    <li>State</li>
                                </ul>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Node.js</li>
                                </ul>
                                <ul>
                                    <li>express</li>
                                    <li>mySQL</li>
                                </ul>
                                <ul>
                                    <li>React.js</li>
                                    <li>MERN</li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>       
            </div>

        )
    }
}

export default Hero;