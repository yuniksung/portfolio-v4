import React from 'react'
import {
    ContactBox,
    ContactText,
    ContactText1,
    ContactText2,
    ContactEmail,
    ContactUl,
    ContactList,
    ContactLink,
    ContactIcon
} from './HeroElement'

const HeroContact = () => {
    return (
        <ContactBox>
            <ContactText>
                <ContactText1>
                    <ContactEmail  href="mailto:yuniksung@gmail.com" 
                        rel="noreferrer"
                        >
                        yuniksung@gmail.com
                    </ContactEmail>
                </ContactText1>
                <ContactText1>
                <ContactUl>
                    <ContactList>
                        <ContactLink target="_blank" 
                        href="https://www.linkedin.com/in/yun-ik-sung-0a02a326/" 
                        rel="noreferrer"
                        >
                            <ContactIcon className="fab fa-linkedin-in"></ContactIcon>
                        </ContactLink>
                    </ContactList>
                    <ContactList>
                        <ContactLink target="_blank" 
                        href="https://github.com/yuniksung" 
                        rel="noreferrer"
                        >
                            <ContactIcon className="fab fa-github"></ContactIcon>
                        </ContactLink>
                    </ContactList>
                    <ContactList>
                        <ContactLink 
                        href={process.env.PUBLIC_URL+'/Yunik_Resume.pdf'}>
                            <ContactIcon className="far fa-file-alt"></ContactIcon>
                        </ContactLink>
                    </ContactList>
                </ContactUl>  
                </ContactText1>
            </ContactText>
        </ContactBox>
    )
}

export default HeroContact
