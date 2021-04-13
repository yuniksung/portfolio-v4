import React, { Component } from "react";

import './Hero.scss'

class Hero extends Component{

    render() {

        

        return(
            <div className="hero-container">

                <div className="hero-wrapper">
                    <div className="single-box">
                        <div className="header-area">
                        </div>
                        <div className="body-area">
                            <h3>Yunik Sung</h3>
                            <h4>Fullstack Developer</h4>
                            <p className="pro-text">  I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                            Especially I have serious passion for UI design, animations and creating intuitive, dynamic user experiences.
                            </p>
                            <h5>
                            Here are Technologies I am Capable of:
                            </h5>
                            <ul>
                                <li>html/css</li>
                                <li>SASS</li>
                                <li>Javascript</li>
                                <li>Node.js</li>
                                <li>express</li>
                            </ul>
                            <ul>
                                <li>mySQL</li>
                                <li>React.js</li>
                                <li>MERN</li>
                                <li>State</li>
                            </ul>
                        </div>  
                    </div>


                </div>       
            </div>

        )
    }
}

export default Hero;