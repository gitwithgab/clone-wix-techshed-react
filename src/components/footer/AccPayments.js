import React from 'react';
import LogoVisa from "../../assets/img/visalogo.png";
import LogoMC from "../../assets/img/mastercardlogo.png";
import LogoAmex from "../../assets/img/amexlogo.png"
import LogoUP from "../../assets/img/unionpaylogo.png";
import LogoJCB from "../../assets/img/jcblogo.png";
import LogoDC from "../../assets/img/dinersclublogo.png";
import LogoDisc from "../../assets/img/discoverlogo.png";
import LogoPaypal from "../../assets/img/paypallogo.png";


const AccPayments = () => {
    return (
        <>
                <div className="acc-payments">

                    <p>We accept the following payment methods</p>

                    <div>
                        <img src={LogoVisa} alt="accepted payment logo"></img>
                        <img src={LogoMC} alt="accepted payment logo"></img>
                        <img src={LogoAmex} alt="accepted payment logo"></img>
                        <img src={LogoUP} alt="accepted payment logo"></img>
                        <img src={LogoJCB} alt="accepted payment logo"></img>
                        <img src={LogoDC} alt="accepted payment logo"></img>
                        <img src={LogoDisc} alt="accepted payment logo"></img>
                        <img src={LogoPaypal} alt="accepted payment logo"></img>
                    </div>

                </div>
        </>
    )
}

export default AccPayments
