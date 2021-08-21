import React from 'react';
import {FaBars, FaTimes, FaBox} from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import MobileNavLinks from "./MobileNavLinks";
import {useState} from "react";
import { Link } from "react-router-dom";


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <FaBars className="mobile-icon" 
                            onClick={()=> setOpen(!open)} 
                            />

    const closeIcon = <FaTimes className="mobile-icon mobile-close" 
                            onClick={()=> setOpen(!open)} 
                            />
    
    const closeMobileNav = () => setOpen (false);


    return (
        <>
            <div className="mobile-navigation" >

                 <div>
                    
                    <FaBox />

                    <p>
                        
                        Free Shipping for orders over $50

                    </p>

                </div>

                <div className="mobile-techshed">

                    <div>
                        
                        <Link to="/"> <h1>TechShed</h1> </Link>



                    </div>

                    <div>

                        <Link to='/' > <BiCart className="nav-icon"/> 0 </ Link> 

                        {open ? closeIcon : hamburgerIcon}

                        {open && <MobileNavLinks isMobile={true} closeMobileNav={closeMobileNav} />}

                    </div>

                </div>

                <div className="search-container">
                            
                            <input type="text" placeholder="Search..." name="search"/>
                            <button type="submit">  <BsSearch />    </button>

                </div>

            </div>
        </>
    )
}

export default MobileNavigation