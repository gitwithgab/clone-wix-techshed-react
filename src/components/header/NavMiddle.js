import React from 'react';
import { RiAccountCircleFill, RiHeart3Line } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavMiddle = () => {
    return (
        <>
            <div className="nav-middle">
                    <div id="techshed">
                        
                        <h1>TechShed</h1>

                        <div class="search-container">
                            
                            <input type="text" placeholder="Search..." name="search"/>
                            <button type="submit">  <BsSearch />    </button>

                        </div>
                    </div>

                    <nav>

                        <ul>
                            
                            <li> <Link to='/' > <RiAccountCircleFill className="nav-icon"/> Login </ Link> </li>
                            <li> <Link to='/' > <RiHeart3Line className="nav-icon"/> Favorites </ Link> </li>
                            <li> <Link to='/' > <BiCart className="nav-icon"/> 0 </ Link> </li>

                        </ul>

                    </nav>

                
            </div>
        </>
    )
}

export default NavMiddle
