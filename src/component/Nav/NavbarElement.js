import styled from "styled-components";
import { navFlex, listStyle2, OpenSans, flexCen } from '../../styleComponents/mixins';

export const NavScroll = styled.div`
    width: 100%;
    display: flex;
    z-index: 999;
    position: fixed;
    background-color: transparent;
    height: 7vh;
    background: #333333;
    border-bottom: 2px solid #b90504;
    ${OpenSans};
`

export const NavWrapper = styled.div`
    width: 100%;
`

export const NavUl = styled.ul`
    width: 100%;
    height: 100%;
    ${navFlex};
`

export const NavList = styled.li`
    ${listStyle2};
    
`