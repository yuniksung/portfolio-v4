import styled from "styled-components";
import { flexCen,OpenSans, listStyle, anchorStyle, SourceSans } from '../../styleComponents/mixins'

export const HeroContainer = styled.div`
    width: 100%;
    height: 75vh;
    margin: auto;
    background: #e8e8e8;
    ${flexCen};
    flex-direction: column;
    ${OpenSans};
`

export const HeroTitle = styled.div`
    width: 90%;
    margin: 2.5rem auto;
`

        export const HeroTextP = styled.p`
            text-align: center;
            font-size: 1.6em;
            padding: 0 15px;
            color: #333333;
        `
        export const HeroSpanText = styled.span`
            color: #990100;
            letter-spacing: 1px;
        `
export const HireMe = styled.div `
    width: 100%;
    ${flexCen};
`

export const ContactBox = styled.div`
    width: 100%;
    position: absolute;
    margin: auto;
    top: 70vh;
`
export const ContactText = styled.div`
    width: 90%;
    height: 80px;
    margin: auto;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    box-shadow: 4px 6px 10px gray;
    `
export const ContactText1 = styled.div`
    ${flexCen}
    
`

export const ContactEmail = styled.a`
    text-transform: uppercase;
    ${anchorStyle};
    color: #010057;
    letter-spacing: 1px;
    font-weight: 600;
`
export const ContactText2 = styled.div`
    ${flexCen}

`


export const ContactLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 16px;
`
export const ContactUl = styled.ul`
    display: flex;
`
export const ContactList = styled.li`
    ${listStyle};
`
export const ContactIcon = styled.i`
    margin: 5px 10px 0;
`