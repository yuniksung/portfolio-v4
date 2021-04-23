import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './etcportfolio.scss'


function ViewMoreBtn() {

    useEffect(() => {
        Aos.init({
            duration: 3000
        });
    }, []);


    return(
        
        <div data-aos="fade-in"
         className="viewmore-btn"> 

        <h3>
        To see more projects, 
            <a href="https://www.github.com/yuniksung" 
            target="_blank"
            rel="noopener noreferrer">
                CLICK HERE
            </a>
        to visit my repository.
        </h3>
        
        </div>
    )
        
    
}

export default ViewMoreBtn;