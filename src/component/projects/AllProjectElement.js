import styled from "styled-components";
import { OpenSans, SourceSans, anchorStyle, defaultShadow } from "../../styleComponents/mixins";

export const ProjectContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 2em auto;
${OpenSans};
`


export const ProjectTitle = styled.h1`
    ${SourceSans}
    font-size: 20px;
`

export const ProjectBox = styled.div`
width: 90%;
height: 550px;
flex-direction: column;
display: flex;
margin: 1em 4em 2em;
${defaultShadow};
`

export const ProjectPic = styled.div`
width: 100%;
height: 50%;
border-top: 1px solid #333333;
border-left: 1px solid #333333;
border-right: 1px solid #333333;
`
export const ProjectText = styled.div`
width: 100%;
height: 50%;
padding: 0 1em;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-color: #f6f6f6;
border-bottom: 1px solid #333333;
border-left: 1px solid #333333;
border-right: 1px solid #333333;
`
export const P1 = styled.div`

`
export const P2 = styled.div`
`
export const P3 = styled.div`
`
export const ProjectImg = styled.img`
width: 100%;
height: 100%;
`
export const ProjectName = styled.h1`
font-size: 16px;
margin: 5px 0;
font-weight: 600;
text-align: center;

&::first-word{
    font-size: 16px;
    font-weight: 600;
}
`
export const ProjectPosition = styled.p`
 font-size 14px;
 text-align: center;
 margin-bottom: 5px;
`

export const PositionSpan = styled.span`
    font-weight: 600;
`

export const ProjectDescription = styled.p`
 font-size 14px;
 text-align: center;
`
export const ProjectTech = styled.p`
// color: $tech-text;
font-size: 14px;
word-spacing: 1em;
text-align: center;
`
export const ProjectLink = styled.a`
margin-top: 20px;
${anchorStyle};
color: #990100;
padding: 1em;
text-align: center;
font-size: 18px;
`
export const ProjectIcon = styled.i`

`