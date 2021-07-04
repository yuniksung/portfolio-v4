import React from "react";

import {
    FooterContainer,
    FooterWrapper,
    FooterText,
    EmailBox,
    FooterLink,
    FooterUl,
    FooterList,
    FooterIcon

} from './FooterElement'

function AppFooter(){
    return(
        <FooterContainer>
            <FooterWrapper>
                <FooterText>
                    Designed and Built By Yunik Sung
                </FooterText>
                <EmailBox className="email">
                    <FooterLink href="mailto:yuniksung@gmail.com" 
                    rel="noreferrer"
                    >
                        <FooterText>
                            yuniksung@gmail.com
                        </FooterText>
                    </FooterLink>
                </EmailBox> 
                <FooterUl>
                    <FooterList>
                        <FooterLink href="mailto:yuniksung@gmail.com" 
                        rel="noreferrer"
                        >
                            <FooterIcon className="fas fa-envelope"></FooterIcon>
                        </FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink target="_blank" 
                        href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/" 
                        rel="noreferrer"
                        >
                            <FooterIcon className="fab fa-linkedin-in"></FooterIcon>
                        </FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink target="_blank" 
                        href="https://github.com/yuniksung" 
                        rel="noreferrer"
                        >
                            <FooterIcon className="fab fa-github"></FooterIcon>
                        </FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterLink 
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            <FooterIcon className="far fa-file-alt"></FooterIcon>
                        </FooterLink>
                    </FooterList>
                </FooterUl>  
            </FooterWrapper>
        </FooterContainer>
    )
}

export default AppFooter;