import React from 'react';
import "../sect-7/SectSeven.css";
import BtnShop from "../buttons/BtnShop";
import TodayBg from "../../assets/img/electronics-drone-2.png";


const SectSeven = () => {
    return (
        <>
            
            <div className="todays-special">

                <div>

                        <div>
                    
                            <p className="ts-text">
                                Today's Special
                            </p>
                           

                            <h3>
                                Best Arial View in Town
                            </h3>
                            <h1>
                                <span className="thirty-percent">30%</span> OFF
                            </h1>
                            <h3>
                                on professional camera drones
                            </h3>
                            <p>
                                Limited quantities.<br/>
                                See product detail pages for availability
                            </p>
                            
                            <BtnShop />

                        </div>

                </div>

                <div id="diag-line2" style={{ backgroundImage: `url(${TodayBg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width:'100%',
                minHeight:'50vh'
                }}>
                                
                </div>

            </div>
        
        </>
    )
}

export default SectSeven
