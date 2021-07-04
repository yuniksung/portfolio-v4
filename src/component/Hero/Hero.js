import React, { useEffect } from "react";
import {
    HeroContainer,
    HeroTitle,
    HeroTextP,
    HeroSpanText,
    HireMe,
    HeroBtn,
} from './HeroElement'
import Aos from "aos";

import "aos/dist/aos.css";


function Hero(){

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return(
        <HeroContainer>
            <HeroTitle>
                <HeroTextP>
                    Hello, my name is <HeroSpanText> Yunik Sung </HeroSpanText>I'm a full-stack web developer
                </HeroTextP>
                
            </HeroTitle>
            <HireMe>
                <HeroBtn href="mailto:yuniksung@gmail.com" 
                    rel="noreferrer">
                    Hire Me
                </HeroBtn>
                <HeroBtn target="_blank" 
                rel="noreferrer" 
                href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                    Download Resume
                </HeroBtn>
            </HireMe> 
        </HeroContainer>

    )
}

export default Hero;