import styled from "styled-components";
import { OpenSans, flexCen } from '../../styleComponents/mixins';

export const NavScroll = styled.div`
    width: 100%;
    height: 5vh;
    z-index: 999;
    position: fixed;
    background: #333333;
    border-bottom: 3px solid #b90504;
    ${flexCen};
    ${OpenSans};
`

export const NavWrapper = styled.div`

`

export const NavUl = styled.ul`
    ${flexCen};
`

export const NavList = styled.li`
    list-style: none;
    padding: 0 20px;
    
`