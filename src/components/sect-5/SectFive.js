import React from 'react';
import "../sect-5/SectFive.css";
import BestBg from "../../assets/img/electronics-background-1.png"
import BtnShop from "../buttons/BtnShop";

const SectFive = () => {
    return (
        <>
                    <div className="best-price"
                        style={{ backgroundImage: `url(${BestBg})`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        width:'95%',
                        height:'70vh'
                     }}>

                            <div id="diag-line">
                                
                            </div>
                            
                            <div>

                                <h3>
                                        Best Price <br/>
                                
                                         Save up to
                                </h3>
                                
                                <h1>
                                    $150
                                </h1>
                                
                                <h3>
                                    on selected laptop & tablets brands
                                </h3>
                                
                                <p>
                                    Terms and conditions apply
                                </p>

                                <BtnShop />

                             </div>

                </div>
        </>
    )
}

export default SectFive
