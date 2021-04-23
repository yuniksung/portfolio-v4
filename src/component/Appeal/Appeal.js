import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import './Appeal.scss'

const Appeal = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, []);
    
    return(
        <div className="appeal-container">
            <div data-aos="fade-up" className="appeal-wrapper">
            <i className="fas fa-quote-right"></i>
            <p>
            Full Stack Web Developer leveraging a background in project management. Recognized for <span>leadership</span>. Recently received
            a Certificate in <span>Web Development</span> from the University of Austin. Excellent <span>interpersonal communication skills</span> and 
             <span> collaborator</span> who works well on team-based projects as well as independently. Recognized for <span>proven complex
            problem-solving abilities</span> to contribute effectively as a part of a fast-paced, quality-driven team.

            </p>
            <i className="fas fa-quote-left"></i>
            </div>
           
        </div>
    )
    
}

export default Appeal;