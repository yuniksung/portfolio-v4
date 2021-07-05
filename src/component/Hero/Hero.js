import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {
    HeroContainer,
    HeroTitle,
    HeroTextP,
    HeroSpanText,
    HireMe,
} from './HeroElement'
import Aos from "aos";

import "aos/dist/aos.css";


export const HeroBtn = styled(Link)`
    margin-right: 1em;
    border: solid 1px #b90504;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    color: #b90504;
    font-size: 1.2em;
    letter-spacing: 1px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    cursor: pointer;
`


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
                <HeroBtn to="projects">
                    View my works
                </HeroBtn>
            </HireMe> 
        </HeroContainer>

    )
}

export default Hero;