import React, { useEffect } from "react";
import Aos from "aos";

import "aos/dist/aos.css";
import './Hero.scss';

import HeroPic from '../../assets/images/me1.jpg';


function Hero(){

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return(
        <div className="hero-container">
            <div className="wrapper">
                <div className="mypic">
                    <img src={HeroPic} alt="Handsome guy" />
                </div>
                <div className="hero-title">
                    <h2>
                        <span>Hello</span>, my name is
                    </h2>
                    <h1>
                        Yunik Sung
                    </h1>
                    <h2>
                        I am a Full Stack Web Developer
                    </h2>
                </div>
            </div>
            
        </div>

    )
}

export default Hero;