import React, { Component } from "react";
import { Link } from "react-router-dom";

import './AppNav.scss'

class AppNav extends Component{

    render() {

        return(
            <div className="nav-container">
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/aboutme"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/resume"}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AppNav;