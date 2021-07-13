import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import Aos from "aos";

import './Skills.scss';


const Skills = () => {

    useEffect(() => {
        Aos.init({
            duration: 1500
        });
    }, []);

    return (
        <div className="skillbox">
            <div data-aos="fade-in"
            className="skills">

                <div className="box">
                    <div className="header">

                        <h3>Front-End</h3>
                    </div>
                    <div className="body">
                        <div className="card">
                            <p>
                                HTML5
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                CSS3
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                SASS
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                JAVASCRIPT
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                REACT.JS
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="header">

                        <h3>Back-End</h3>
                    </div>
                    <div className="body">
                        <div className="card">
                            <p>
                                Node.js
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                express.js
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                mysql
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                mongodb
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                mongoose
                            </p>
                        </div>
                    </div>
                </div>     
                <div className="box">
                    <div className="header">

                        <h3>Tools</h3>
                    </div>
                    <div className="body">
                        <div className="card">
                            <p>
                                Git
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                Heroku
                            </p>
                        </div>
                        <div className="card">
                            <p>
                                Netlify
                            </p>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Skills
