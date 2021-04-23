import React from "react";
import './AppFooter.scss'

function AppFooter(){
    return(
        <div className="footer-container">
            <div className="footer-wrapper">
                <p>
                    Designed and Built By Yunik Sung
                </p>
                <ul>
                    <li>
                        <a href="mailto:yuniksung@gmail.com" 
                        rel="noreferrer"
                        className="icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" 
                        href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/" 
                        rel="noreferrer"
                        className="icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" 
                        href="https://github.com/yuniksung" 
                        rel="noreferrer"
                        className="icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                    <a 
                        className="icon" 
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            <i className="far fa-file-alt"></i>
                        </a>
                    </li>
                </ul>  
            </div>
        </div>
    )
}

export default AppFooter;