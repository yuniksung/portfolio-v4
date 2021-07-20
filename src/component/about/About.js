import React from 'react'
import './About.scss';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-wrapper">

                <div className="talents">
                    <div class="card">
                        <div class="talent-icon">
                            <i className="fas fa-fighter-jet"></i>
                        </div>
                        <h4>Fast Learner</h4>
                        <p>Display an ability to learn rapidly and adapt quickly to changing situations
                        </p>
                    </div>
                    <div class="card">
                        <div class="talent-icon">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h4>Project Management</h4>
                        <p>Effectively blend management skills with technical expertise
                        </p>
                    </div>
                    <div class="card">
                        <div class="talent-icon">
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <h4>Problem Solver</h4>
                        <p>                            Excels in creative thinking and problem solving

                        </p>
                    </div>
                    <div class="card">
                        <div class="talent-icon">
                            <i className="fas fa-tasks"></i>
                        </div>
                        <h4>Motivation</h4>
                        <p>Strive for maximum drive in fulfilling job
                            responsibilities
                        </p>
                    </div>
                </div>

                <div className="about-box">
                    <div className="box my-words">
                        <div className="about-me">
                            <div className="about-text">
                                <h1>About Me</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, quasi maxime aperiam, rem voluptate qui fugiat recusandae iste perferendis soluta tempora impedit delectus dolorum dolorem nesciunt, voluptatem minus asperiores quaerat.</p>
                            </div>
                            <div className="sns-link">

                            </div>
                        </div>
                    </div>
                    <div className="box skill-sets">

                    </div>
                </div>   
            </div>
        </div>
    )
}

export default About
