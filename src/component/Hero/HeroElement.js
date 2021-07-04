import styled from "styled-components";
import { flexCen,OpenSans, SourceSans } from '../../styleComponents/mixins'

export const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 80px;
    background: #e8e8e8;
    ${flexCen};
    flex-direction: column;
    ${OpenSans};
`

export const HeroTitle = styled.div`
    width: 50%;
    margin: 2.5rem auto;
`

        export const HeroTextP = styled.p`
            text-align: center;
            font-size: 3em;
            padding: 0 3em;
            color: #333333;
        `
        export const HeroSpanText = styled.span`
            color: #990100;
            letter-spacing: 3px;
            // font-size: 8rem;
        `
export const HireMe = styled.div `
    width: 100%;
    ${flexCen};
`
        export const HeroBtn = styled.a `
            margin-right: 1em;
            border: solid 1px #b90504;
            border-radius: 5px;
            padding: 10px 20px;
            text-decoration: none;
            color: #b90504;
            font-size: 1.5em;
            letter-spacing: 1px;
            ${SourceSans}
            transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

            &:hover{
                border: solid 1px #333333;
              }
        `