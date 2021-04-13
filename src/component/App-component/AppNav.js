import React, { useState } from "react";
import { Link } from "react-router-dom";

import './AppNav.scss'

const AppNav = () => {
    const [navbar, setNavbar] = useState(false);


    const changeBg = () => {
        if(window.scrollY >= 80) {
            setNavbar(true) 
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBg);

    return(
        <div className={
            navbar ? 'navbar active' : 'navbar'
        }>
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

export default AppNav;