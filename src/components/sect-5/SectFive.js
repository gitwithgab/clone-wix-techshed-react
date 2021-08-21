import React from 'react';
import "../sect-5/SectFive.css";
import BestBg from "../../assets/img/electronics-background-1.png"
import BtnShop from "../buttons/BtnShop";

const SectFive = () => {
    return (
        <>
                    <div className="best-price">

                            <div id="diag-line" 
                                style={{ backgroundImage: `url(${BestBg})`, 
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                widht:'100%',
                                minHeight:'40vh'
                            }}>
                                
                            </div>

                                                            
                            
                            <div>
                                <div>
                                
                                    <h3>
                                            Save up to
                                    </h3>
                                    
                                    <h1>
                                        $150
                                    </h1>
                                    
                                    <h3>
                                        on selected laptop and tablets brands
                                    </h3>
                                    
                                    <p>
                                        Terms and conditions apply
                                    </p>

                                    <BtnShop />
                                </div>

                             </div>

                </div>
        </>
    )
}

export default SectFive
