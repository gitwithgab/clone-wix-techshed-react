import React from 'react';
import NavTop from "../header/NavTop";
import NavMiddle from "../header/NavMiddle";
import NavBottom from "../header/NavBottom";
import MobileNavigation from "../header/MobileNavigation";
import  "../header/Header.css";
import Chat from "../header/Chat";

const Header = () => {
    return (
        <>
            <header>

                <NavTop />
                <NavMiddle />
                <NavBottom />
                <MobileNavigation />  
                <Chat />
                
            </header>
        </>
    )
}

export default Header
