import React, {useState} from 'react';
// import css from './homePage.module.css';
import Navbar from '../../shared/Navbar/index';
import Sidebar from '../../shared/Sidebar/index';
import HeroSection from '../../shared/HeroSection/index';
import InfoSection from '../../shared/InfoSection/index'
import { homeObjOne, homeObjThree, homeObjTwo } from '../../shared/InfoSection/Data';
import Services from '../../shared/Services';
import Footer from '../../shared/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;
