import styled from "styled-components";
import { navFlex, listStyle2, OpenSans } from '../../styleComponents/mixins';

export const NavScroll = styled.div`
    width: 100%;
    display: flex;
    z-index: 999;
    position: fixed;
    background-color: transparent;
    height: 5vh;
    background: #344d4a;
    border-bottom: 2px solid #ffd000;
    ${OpenSans};
`

export const NavWrapper = styled.div`
    width: 100%;
`

export const NavUl = styled.ul`
    width: 100%;
    ${navFlex};
`

export const NavList = styled.li`
    ${listStyle2};
`

export const NavAnchor = styled.a`
    color: #cfb776;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    cursor: pointer;

    &:hover{
        color: #a88900;
    }
`