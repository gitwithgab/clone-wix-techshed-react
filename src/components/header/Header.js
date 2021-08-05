import React from 'react';
import NavTop from "../header/NavTop";
import NavMiddle from "../header/NavMiddle";
import NavBottom from "../header/NavBottom";
import MobileNav from "../header/MobileNav";
import  "../header/Header.css";
import Chat from "../header/Chat";

const Header = () => {
    return (
        <>
            <header>

                <NavTop />
                <NavMiddle />
                <NavBottom />
                <MobileNav />  
                <Chat />
                
            </header>
        </>
    )
}

export default Header
