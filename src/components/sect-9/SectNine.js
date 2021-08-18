import React from 'react';
import "../sect-9/SectNine.css";

const SectNine = () => {
    return (
        <>
            <div className="newsletter">
                <div>
                    <h4>
                        Newsletter
                    </h4>

                    <p>
                        Sign up to receive updates on new arrivals and special offers
                    </p>

                    <form className="newsletter-form" action="">
                        <input type="text" placeholder="Your Email Here" name="email"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SectNine
