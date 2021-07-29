import React from 'react';
import "../sect-7/SectSeven.css";
import BtnShop from "../buttons/BtnShop";
import TodayBg from "../../assets/img/electronics-drone-2.png";


const SectSeven = () => {
    return (
        <>
            
            <div className="todays-special"
                style={{ backgroundImage: `url(${TodayBg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width:'95%',
                height:'75vh'
             }}>

                <div>

                        <div>
                    
                            <div>
                                <p>
                                    Today's Special
                                </p>
                            </div>

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

                <div id="diag-line2">
                                
                </div>

            </div>
        
        </>
    )
}

export default SectSeven
