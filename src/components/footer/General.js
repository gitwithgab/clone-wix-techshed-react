import React from 'react';
import { Link } from "react-router-dom";

const General = () => {
    return (
        <>
                <div class="general">
                    
                    <div>
                        <div>

                            <h4>
                                Store Location
                            </h4>

                            <p>
                                500 Terry Francois Street<br/>
                                San Francisco, CA 94158<br/>
                                info@mysite.com<br/>
                                123-456-7890
                            </p>

                            <ul id="social-links">
                                
                                <li> <Link to='/' > <i class="fab fa-facebook-f"></i> </ Link> </li>
                                <li> <Link to='/' > <i class="fab fa-instagram"></i> </ Link> </li>
                                <li> <Link to='/' > <i class="fab fa-twitter"></i> </ Link> </li>
                                <li> <Link to='/' > <i class="fab fa-youtube"></i> </ Link> </li>

                            </ul>

                        </div>

                        <div id="shop">

                            <h4>
                                Shop
                            </h4>

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

                        </div>

                        <div id="customer-support">

                            <h4>
                                Customer Support
                            </h4>

                            <ul>

                                <li> <Link to='/' > Contact Us </ Link> </li>
                                <li> <Link to='/' > Help Center </ Link> </li>
                                <li> <Link to='/' > About Us </ Link> </li>
                                <li> <Link to='/' > Careers </ Link> </li>

                            </ul>

                        </div>

                        <div>

                            <h4>
                                Policy
                            </h4>

                            <ul>

                                <li> <Link to='/' > Shipping Returns </ Link> </li>
                                <li> <Link to='/' > Terms Conditions </ Link> </li>
                                <li> <Link to='/' > Payment Methods </ Link> </li>
                                <li> <Link to='/' > FAQ </ Link> </li>
        
                            </ul>

                        </div>
                    </div>

                </div>
                
        </>
    )
}

export default General
