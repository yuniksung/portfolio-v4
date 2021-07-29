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
                <div className="hireme-btn">

                    <a href="mailto:yuniksung@gmail.com" 
                        rel="noreferrer"
                        className="icon">
                        Contact
                    </a>
                    <a target="_blank" 
                    rel="noreferrer" 
                    href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                        Resume
                    </a>
                </div>
            </div>            
        </div>

    )
}

export default Hero;