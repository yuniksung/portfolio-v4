import styled from "styled-components";
import { listStyle, SourceSans } from '../../styleComponents/mixins'

export const FooterContainer = styled.div`
    height: auto;
    min-height: 70px;
    padding: 20px 15px;
    text-align: center;
    ${SourceSans};
    background-color: #333333;
`
export const FooterWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #e8e8e8;

    &:hover{
        color: #c09d00;
    }

`
export const FooterText = styled.p`
    display: inline-block;
    letter-spacing: 2px;
`

export const EmailBox = styled.div`
    width: 70%;
`

export const FooterLink = styled.a`
    color: inherit;
    text-decoration: none;
    font-size: 16px;
`
export const FooterUl = styled.ul`
    display: flex;
`
export const FooterList = styled.li`
    ${listStyle};
`
export const FooterIcon = styled.i`

`