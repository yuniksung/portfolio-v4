import React, { Component } from "react";

import './PageAboutMe.scss'

class Hero extends Component{

    render() {

        

        return(
            <>
        <div className="hero-descript">
            <h3>
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Especially I have serious passion for <span>
            UI design</span>, animations and creating intuitive, dynamic user experiences.
            </h3>
            <p>
            Full Stack Web Developer leveraging a background in project management. Recognized for <span>leadership</span>. Recently received
            a Certificate in <span>Web Development</span> from the University of Austin. Excellent <span>interpersonal communication skills</span> and 
             <span> collaborator</span> who works well on team-based projects as well as independently. Recognized for <span>proven complex
            problem-solving abilities</span> to contribute effectively as a part of a fast-paced, quality-driven team.

            </p>
        </div>

        <div className="single-box">
            <div className="body-area">
                <h5>
                Here are Technologies I am Capable of:
                </h5>

                <div className="skills-order">
                    <div className="front-end skills-set">
                        <h3>
                            Front End
                        </h3>
                        <ul> 
                            <li>HTML/CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                    <div className="back-end skills-set">
                        <h3>
                            Back End
                        </h3>
                        <ul> 
                            <li>Javascript</li>
                            <li>Node.js</li>
                            <li>Express.Js</li>
                            <li>mySQL</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>

                    <div className="other-skills skills-set">
                        <h3>
                            Other
                        </h3>
                        <ul> 
                            <li>Git</li>
                            <li>Github</li>
                            <li>Heroku</li>
                            <li>Adobe Suites</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
            </>
        )
    }
}

export default Hero;