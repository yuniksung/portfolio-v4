import React, { Component } from "react";
import './PageAboutMe.scss'

class PageAboutMe extends Component{

    render() {

        return(
            <div className="about-container">
                       <h1>
                            About Me
                        </h1>
                <div className="about-border">
 
                    <div className="about-me">
                        <h2>
                            Yunik Sung, 
                            <span>
                            Full Stack Web Developer
                            </span>
                        </h2>
                        <p>
                            I am Austin based <span>Full Stack web developer</span>. I recently graduated from University of Austin Coding Boot Camp and ready to use what I've learned 
                        </p>
                        <p>
                            I am very motivated and fast learner. I do not afraid to break new ground. If you would like to work with me, please do not hesitate to contact me.
                        </p>
                    </div>
                    <div className="mypic">
                        <div className="mypic-hover">
                            
                        </div>
                    </div>
                    <div className="skillset-wrapper">
                        <h2>
                        Here are Technologies I am Capable of:
                        </h2>
                        <ul>
                            <li>html/css</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>express</li>
                            <li>mySQL</li>
                            <li>React.js</li>
                            <li>MERN</li>
                            <li>State</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default PageAboutMe;