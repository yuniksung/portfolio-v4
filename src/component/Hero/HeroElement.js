import styled from "styled-components";
import { flexCen,OpenSans, SourceSans } from '../../styleComponents/mixins'

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
