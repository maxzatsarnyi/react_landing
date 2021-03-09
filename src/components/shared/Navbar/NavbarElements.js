import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top поднимает видео вверх, и тех поднимается выше
    margin-top: -60px;
    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'black')}; 

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    width:100%;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    padding-left: 55px;
    font-size: 1.3rem;
`

export const NavLogo = styled(LinkR)`
    text-decoration: none;
    display: flex;
    justify-self: flex-start;
    align-items: center;
    font-weight: 700;
    color: #e6e6e6;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 40%);
    }
`

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    padding: 0 24px;
`

export const Navlinks = styled(LinkS)`
    /* color: white; */
    color: #e6e6e6;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #66c2ff;
    }
    &:hover {
        color: #66c2ff;
    }
    
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #66c2ff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`