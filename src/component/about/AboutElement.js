import styled from "styled-components";
import {
    flexCen,
    listStyle,
    OpenSans,
    SourceSans
} from '../../styleComponents/mixins'
export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 5rem 0 2rem 0;
    ${OpenSans}
    background: #f8f8f8;
`


export const AboutWrapper = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
    padding: 4rem 0 2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export const WhatBox = styled.div`
    width: 100%;
    ${flexCen};
    
`

export const CandoBox = styled.div`
    width: 100%;
    ${flexCen};
    flex-direction: column;
    flex-wrap: wrap;
`

export const WhatIcons = styled.div`
    background-color: #333333;
    height: 100%;
    text-align: center;
    padding: 1rem;
    ${flexCen};
    border-radius: 10px/30px;

    &:hover{
        background-color: #b90504;
    }
`


export const WhatIcon = styled.i`
    font-size: 2.5rem;
    color: #fff;
`

export const WhatICanDo = styled.div`
    padding: 10px 0;
    height: 200px;
    width: 200px;
`


export const Whath2 = styled.p`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    padding: 5px;
`



export const WhatP = styled.p`
    font-size: 1rem;
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
`



export const TextBox = styled.div`
    width: 90%;
    height: 100%;
    // padding: 3px;
    border: 1px solid black;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-item: center;
`

export const PictureBox = styled.div`
    width: 35%;
    height: 250px;
    background: url("https://github.com/yuniksung/portfolio-v4/blob/main/src/assets/images/me.jpg?raw=true");
    background-position: center;
    background-size: cover;
    ${flexCen};   
`

export const Picture = styled.div`
 width: 100%;
 height: 100%;
 
`

export const AboutP = styled.p`
width: 60%;
height: 80%;
margin: auto 0;
letter-spacing: 1px;
line-height: 140%;
margin-right: 20px;

&::first-letter{
    font-size: 2rem;
}
`
export const AboutSpan = styled.span`
    color: #b90504;
`


export const SkillBox = styled.div`
    width: 100%;
    padding: 2rem;
    ${flexCen}
    flex-direction: column;
`
export const SkillText = styled.p`
    width: 100%;
    text-align: center;
`
export const SkillTree = styled.div`
    width: 100%;
    margin-top: 5rem;
`
export const SkillUls = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-item: center;
`
export const SkillUl = styled.ul`
   padding: 10px;
`
export const SkillLists = styled.li`
   ${listStyle};
   font-size: 1.5rem;
    ${SourceSans};
    padding: 10px;
`
export const SkillList = styled.ul`
   font-size: 1rem;
   ${OpenSans};
   text-transform: uppercase;
   padding: 5px 0;
   width: 150px;
`

