import React from 'react';
import { RiEBike2Line } from "react-icons/ri";
import { FaBox, FaScroll } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import "../sect-2/SectionTwo.css";


const SectionTwo = () => {
    return (
        <>
            <div className="benefits">
                <div>
                    <RiEBike2Line className="benefits-icon"/>
                    <h4>
                        Curb-side<br/>
                        pickup
                    </h4>
                </div>
                <div>
                    <FaBox className="benefits-icon"/>
                    <h4>
                        Free shipping on<br/>
                        orders over $50
                    </h4>
                </div>
                <div>
                    <FaScroll className="benefits-icon"/>
                    <h4>
                        Low prices <br/>
                        guaranteed
                    </h4>
                </div>
                <div>
                    <FiClock className="benefits-icon"/>
                    <h4>
                        Available to<br/>
                        you 24/7
                    </h4>
                </div>
            </div>
        </>
    )
}

export default SectionTwo
