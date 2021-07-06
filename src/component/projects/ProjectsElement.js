import styled from "styled-components";
import { flexCen, OpenSans } from "../../styleComponents/mixins";


export const ProjectContainer = styled.div`
    width: 100vw;
    height: 100%;
    ${flexCen}
    flex-direction: column;
    padding: 40px 10px;
    ${OpenSans};
`

export const BtnInst = styled.h1`
    text-align: center;
    font-size: 18px;
`

export const ButtonsBox = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`
export const RenderPage = styled.div`
    width: 100%;
    height: 100%;
`
export const RenderBtn = styled.button`
    padding: 5px 10px;
    border: 1px solid #990100;
    background-color: transparent;
    color: #990100;
    cursor: pointer;
`