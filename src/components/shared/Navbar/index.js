import React, {useState, useEffect} from 'react';
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, Navlinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            {/* <IconContext.Provider value={{color:'blue'}}> */}
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <img src={require('../../../images/logoPayment.svg').default} height="40px" alt='logo' />
                            Bank Online
                        </NavLogo>

                        {/* MENU MOBILE */}
                        <MobileIcon onClick={toggle}>
                            <FaBars color={'white'}/>
                        </MobileIcon>

                        {/* TABLE/DESKTOP MENU */}
                        <NavMenu>
                            <NavItem>
                                <Navlinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-60}>About</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</Navlinks>
                            </NavItem>
                            <NavItem>
                                <Navlinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</Navlinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sing In</NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            {/* </IconContext.Provider> */}
        </>
    )
}

export default Navbar
