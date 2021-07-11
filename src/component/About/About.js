import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import './About.scss'

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, []);
    
    return(
        <div className="container">

                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="text">
                <h1>Little story about me</h1>
                <p>
                Full Stack Web Developer leveraging a background in project management. Recognized for <span>leadership</span>. Recently received
                a Certificate in <span>Full Stack Web Development</span> from the University of Austin. Excellent <span>interpersonal communication skills</span> and 
                <span> collaborator</span> who works well on team-based projects as well as independently. Recognized for <span>proven complex
                problem-solving abilities</span> to contribute effectively as a part of a fast-paced, quality-driven team.

                </p>
            </div>
           <div className="skillbox">
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="skillsets">
                    <ul>    Front End
                        <li>HTML/ CSS</li>
                        <li>SASS</li>
                        <li>REACT.JS</li>
                        <li>BOOTSTRAP</li>
                        <li>JQUERY</li>
                        <li>JAVASCRIPT</li>
                    </ul>
                </div>
                 <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="skillsets">
                    <ul>    Back End
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MogoDB</li>
                        <li>Mogoose</li>
                        
                    </ul>
                </div>
                 <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="skillsets">
                    <ul>    Tools
                        <li>Git</li>
                        <li>REST APIs</li>
                        <li>AJAX</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                    </ul>
                </div>
           </div>
        </div>
    )
    
}

export default About;



