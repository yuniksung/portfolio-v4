import React, { Component } from "react";

import './Hero.scss'

class Hero extends Component{

    render() {

        

        return(
            <div className="hero-container">
                <div className="hero-box">
                    <div className="hero-title">
                        <span className="block"></span>
                        <h1>Yunik Sung</h1>
                    </div>

                    <div className="hero-role">
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Hero;