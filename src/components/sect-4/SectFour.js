import React from 'react';
import SectFourCard from "././SectFourCard";
import SectFourData from "././SectFourData";
import "../sect-4/SectFour.css";

function createCard (SectFourData) {
    return (
            <SectFourCard 
                key={SectFourData.id}
                title={SectFourData.title}
                img={SectFourData.img}
            />
    );
}


const SectFour = () => {
    return (
        <>
            <div className="shop-by-category">
            
                <h4> Shop by Category </h4>

                
                <div>

                    {SectFourData.map(createCard)}

                </div>


            </div>
            
        </>
    )
}

export default SectFour
