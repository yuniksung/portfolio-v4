import React from "react";
import { NavScroll, NavWrapper, NavUl, NavList, NavAnchor } from './NavbarElement'



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
                        className="icon" 
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