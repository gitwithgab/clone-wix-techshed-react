import React from 'react'
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavTop = () => {
    return (
        <>
            <div className="nav-top">

                <div>
                    
                    <p>
                        
                        <FaBox />
                        Free Shipping for orders over 50$

                    </p>

                </div>

                <nav>

                    <ul>

                        <li><Link to='/' >About</ Link> </li>
                        <li><Link to='/' >Contact</ Link> </li>
                        <li><Link to='/' >Help Center</ Link> </li>
                        <li>Call Us <Link to='/'>   <span>123-456-7890</span>   </ Link> </li>

                    </ul>

                </nav>
                
            </div>
        </>
    )
}

export default NavTop
