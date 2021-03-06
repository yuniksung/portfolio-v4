import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import './Hero.scss';

import HeroPic from '../../assets/images/me2.png';

function Hero(){

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return(
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-body">
                    <div className="hero-title">
                        <p>
                            Hello, my name is
                        </p>
                        <h1>
                            Yunik Sung
                        </h1>
                        <h2>
                            Full Stack Web Developer
                        </h2>
                    </div>
                    <div className="hero-descript">
                        <h3>
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Especially I have serious passion for <span>
                        UI design</span>, animations and creating intuitive, dynamic user experiences.
                        </h3>
                        
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



                    
                    <div className="hireme-btn">
  
                        <a href="mailto:yuniksung@gmail.com" 
                            rel="noreferrer"
                            className="icon">
                            Hire Me
                        </a>
                        <a target="_blank" 
                        rel="noreferrer" 
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="hero-picture">
                    <img src={HeroPic} alt="" />
                </div>
            </div>
            
        </div>

    )
}

export default Hero;