import React from 'react'
import SectSixCard from "././SectSixCard";
import SectSixData from "././SectSixData";
import BtnViewAll from "../buttons/./BtnViewAll";
import "../sect-6/SectSix.css";


function createCard (SectSixData) {
    return (
            <SectSixCard 
                key={SectSixData.id}
                title={SectSixData.title}
                img={SectSixData.img}
                description={SectSixData.description}
                price={SectSixData.price}
                salePrice={SectSixData.salePrice}
            />
    );
}

const SectSix = () => {
    return (
        <>
            <div className="on-sale">

                <h4> On Sale </h4>

                <div>

                    {SectSixData.map(createCard)}

                </div>

                <BtnViewAll />

            </div>
        </>
    )
}

export default SectSix
