import React from 'react';
import SectionThreeCard from "././SectionThreeCard";
import SectionThreeData from "././SectionThreeData";
import BtnViewAll from "../buttons/./BtnViewAll";
import "../sect-3/SectionThree.css";



function createCard (SectionThreeData) {
    return (
            <SectionThreeCard 
                key={SectionThreeData.id}
                title={SectionThreeData.title}
                img={SectionThreeData.img}
                description={SectionThreeData.description}
                price={SectionThreeData.price}
                salePrice={SectionThreeData.salePrice}
            />
    );
}


const SectionThree = () => {
    return (
        <>
            <div className="best-sellers">
                <h4> Best Sellers </h4>

                <div>

                    {SectionThreeData.map(createCard)}

                </div>

                <BtnViewAll />
            </div>
        </>
    )
}

export default SectionThree
