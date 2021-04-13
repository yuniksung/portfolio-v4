import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './AppStickyMenu.scss';

class AppStickyMenu extends Component{

    render() {

        return(
            <div className="sticky-container">
                <ul>
                <li>
                    <a href="mailto:yuniksung@gmail.com" class="icon">
                        <i class="fas fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/" className="icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/yuniksung" className="icon">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <Link 
                    className="icon" to="../resume/resume">
                        <i className="far fa-file-alt"></i>
                    </Link>
                </li>
                </ul>                    
            </div>
        )
    }
}

export default AppStickyMenu;