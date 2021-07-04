import React from "react";
import styled from "styled-components";
import { NavScroll, NavWrapper, NavUl, NavList } from './NavbarElement'
import { Link } from "react-scroll";

export const NavAnchor = styled(Link)`
    color: #e8e8e8;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    cursor: pointer;

    &:hover{
        color: #a88900;
    }
`


const AppNav = () => {
    return(
        <NavScroll>
            
            <NavWrapper>

                <NavUl>
                    <NavList>
                        <NavAnchor to="hero">About</NavAnchor>
                    </NavList>
                    <NavList>
                        <NavAnchor to="projects">Projects</NavAnchor>
                    </NavList>
                    <NavList>
                        <NavAnchor 
                    
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            Resume
                        </NavAnchor>
                    </NavList>
                </NavUl>
            </NavWrapper>
        </NavScroll>
    )
    
}

export default AppNav;