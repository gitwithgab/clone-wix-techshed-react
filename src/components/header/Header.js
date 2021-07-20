import React from 'react';
import NavTop from "../header/NavTop";
import NavMiddle from "../header/NavMiddle";
import NavBottom from "../header/NavBottom";
import MobileNav from "../header/MobileNav";
import  "../header/Header.css";

const Header = () => {
    return (
        <>
            <header>

                <NavTop />
                <NavMiddle />
                <NavBottom />
                <MobileNav />  
                
            </header>
        </>
    )
}

export default Header
