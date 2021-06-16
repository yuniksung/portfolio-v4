import React, { useState } from "react";
import { Link } from "react-scroll";

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
                        <Link to="hero">About</Link>
                    </li>
                    <li>
                        <Link to="projects">Projects</Link>
                    </li>
                    <li>
                        <a 
                        className="icon" 
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
    
}

export default AppNav;