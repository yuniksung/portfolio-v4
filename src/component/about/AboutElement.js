import styled from "styled-components";
import {
    flexCen,
    listStyle,
    OpenSans,
    smallShadow,
    SourceSans
} from '../../styleComponents/mixins'


export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0 1rem 0;
    ${OpenSans}
    background: #f8f8f8;
`


export const AboutWrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;
    padding: 2rem 0 1rem ;

    @media(min-width: 1440px){
        width: 70%;
    }
`

export const WhatBox = styled.div`
    width: 100%;
    height: 450px;
    display: flex;
    align-item: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;

    @media(min-width: 768px){
        flex-wrap: no-wrap;
        height: 350px;
    }
`

export const CandoBox = styled.div`
    width: 50%;
    ${flexCen};
    flex-direction: column;
    flex-wrap: wrap;
`

export const WhatIcons = styled.div`
    background-color: #333333;
    text-align: center;
    padding: 1rem;
    ${flexCen};
    border-radius: 10px/30px;
    ${smallShadow};
    &:hover{
        background-color: #b90504;
    }
`

export const WhatIcon = styled.i`
    font-size: 1rem;
    color: #fff;

`

export const WhatICanDo = styled.div`
    padding: 10px 0;
    height: 100px;
    width: 80%;
`

export const Whath2 = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    padding: 5px;
`

export const WhatP = styled.p`
    font-size: 13px;
    text-align: center;
`

export const AboutDescription = styled.div`
    width: 100%;
    // display: flex;
    ${flexCen}
    flex-direction: column;


`

export const AboutMe = styled.div`
    width: 100%;
    ${flexCen}
    margin-bottom: 20px;
    ${smallShadow};
    border: 1px solid black;
    background: #fff;
    
`



export const TextBox = styled.div`
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;

    @media(min-width: 768px){
        flex-direction: row;
    }
`

export const PictureBox = styled.div`
    
    width: 100%;
    height: 250px;
    background: url("https://github.com/yuniksung/portfolio-v4/blob/main/src/assets/images/me.jpg?raw=true");
    background-position: center;
    background-size: cover;
    @media(min-width: 768px){
        ${flexCen};
        width: 40%;
        height: 250px;
    }
`

export const Picture = styled.div`
 width: 100%;
 height: 100%;
 
`

export const AboutP = styled.p`
width: 90%;
height: 80%;
letter-spacing: 1px;
line-height: 140%;
text-align: left;
margin: auto 7px;
padding: 10px;
font-size: 14px;
`
export const AboutSpan = styled.span`
    color: #b90504;
`


export const SkillBox = styled.div`
    width: 100%;
    ${flexCen}
    flex-direction: column;
`
export const SkillText = styled.p`
    width: 100%;
    text-align: center;
`
export const SkillTree = styled.div`
    width: 100%;
    // margin-top: 3rem;
`
export const SkillUls = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-item: center;

    
`
export const SkillUl = styled.ul`

    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-item: center;
    @media(min-width: 768px){
        width: 30%;
    }
`
export const SkillLists = styled.li`
    ${listStyle};
    font-size: 1.2rem;
    ${SourceSans};
    padding: 10px 0;

`
export const SkillList = styled.ul`
   font-size: 0.8rem;
   ${OpenSans};
   text-transform: uppercase;
   padding: 5px 0;


`

