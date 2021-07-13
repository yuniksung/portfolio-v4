import React, { useEffect } from "react";
import Aos from "aos";
import HeroPic from '../../assets/images/me1.jpg';
import "aos/dist/aos.css";
import './About.scss'

import Skills from './Skills/Skills'

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, []);
    
    return(
        <>
        <div className="container">
            <div 
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="mypic">
                <img src={HeroPic} alt="Handsome guy" />
            </div>
            <div className="my-info">
            <div data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="text">
                <h1>Little story about me</h1>
                <p>
                Full Stack Web Developer leveraging a background in project management. Recognized for <span>leadership</span>. Recently received
                a Certificate in <span>Full Stack Web Development</span> from the University of Texas - Austin. Excellent <span>interpersonal communication skills</span> and 
                <span> collaborator</span> who works well on team-based projects as well as independently. Recognized for <span>proven complex
                problem-solving abilities</span> to contribute effectively as a part of a fast-paced, quality-driven team.

                </p>
            </div>   
           </div>
        </div>

        <Skills />
        </>
    )
    
}

export default About;



