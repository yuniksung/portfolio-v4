import React from 'react'
import './About.scss';

import meImg from '../../assets/images/me1.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">
                <div className="box my-words">

                </div>
                <div className="box my-pic">
                    <div className="picture">
                        <img src={meImg} alt="me" />
                    </div>
                    <div className="buttons">
                        <a href="mailto:yuniksung@gmail.com" rel="noreferrer" class="icon">Contact Me</a>
                    
                        <a target="_blank" rel="noreferrer" href="/portfolio-v4/Yunik_Resume.pdf">Resume</a>
                        
                    </div>
                </div>
                <div className="box">

                </div>
            </div>
        </div>
    )
}

export default About
