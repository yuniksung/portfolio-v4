import React, { Component } from "react";

import './Hero.scss'

class Hero extends Component{

    render() {

        

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
                            Fullstack Web Developer
                        </h2>
                    </div>
                    <div className="hero-descript">
                        <h3>
                        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Especially I have serious passion for <span>
                        UI design</span>, animations and creating intuitive, dynamic user experiences.
                        </h3>
                        
                    </div>
                    <div className="hireme-btn">
                        <a href="mailto:yuniksung@gmail.com" 
                            rel="noreferrer"
                            className="icon">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Hero;