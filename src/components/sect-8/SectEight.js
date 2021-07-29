import React from 'react';
import "../sect-8/SectEight.css";
import LogoZodiac from "../../assets/img/logo-zodiac.png";
import LogoZoro from "../../assets/img/logo-zoro.png";
import LogoPjk from "../../assets/img/logo-pjk.png";
import LogoGxl from "../../assets/img/logo-gxl.png";
import LogoHorizon from "../../assets/img/logo-horizon.png";

const SectEight = () => {
    return (
        <>
            <div className="brands">

                <h4>
                    Brands
                </h4>

                <div>
                    <div>
                        <img src={LogoZodiac} alt="brand logo"></img>
                    </div>

                    <div>
                        <img src={LogoZoro} alt="brand logo"></img>
                    </div>

                    <div>
                        <img src={LogoPjk} alt="brand logo"></img>
                    </div>

                    <div>
                        <img src={LogoGxl} alt="brand logo"></img>
                    </div>
                    
                    <div>
                        <img src={LogoHorizon} alt="logo"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectEight
