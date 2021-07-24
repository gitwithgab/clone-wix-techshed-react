import React from 'react';
import HelpCenter from "../footer/HelpCenter";
import General from "../footer/General";
import AccPayments from "../footer/AccPayments";

const Footer = () => {
    return (
        <>
            <footer>
                
                <HelpCenter />

                <General />

                <AccPayments />

                <div class="copyright">

                    <p>
                        &copy; 2023 by TechShed. Proudly created with <span id="wix-text"><a href="#">Wix.com</a></span>
                    </p>

                </div>

            </footer>
        </>
    )
}

export default Footer
