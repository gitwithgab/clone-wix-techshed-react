import React from 'react';
import { Link } from "react-router-dom";

const NavBottom = () => {
    return (
        <>
            <nav className="nav-bottom">
                <ul>

                    <li> <Link to='/' > Shop All </ Link> </li>
                    <li> <Link to='/' > Computers </ Link> </li>
                    <li> <Link to='/' > Tablets </ Link> </li>
                    <li> <Link to='/' > Drones and Cameras </ Link> </li>
                    <li> <Link to='/' > Audio </ Link> </li>
                    <li> <Link to='/' > Mobile </ Link> </li>
                    <li> <Link to='/' > T.V and Home Cinema </ Link> </li>
                    <li> <Link to='/' > Wearable Tech </ Link> </li>
                    <li> <Link to='/' > Sale </ Link> </li>

                </ul>
            </nav>
        </>
    )
}

export default NavBottom
