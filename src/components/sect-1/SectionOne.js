import React from 'react';
import SectionOneCard from "./SectionOneCard";
import sectionOneData from "./sectionOneData";
import "../sect-1/SectionOne.css";

function createCard (sectionOneData) {
    return (
            <SectionOneCard 
                key={sectionOneData.id}
                title={sectionOneData.title}
                subtitle={sectionOneData.subtitle}
                description={sectionOneData.description}
                button={sectionOneData.button}
                bgImg={sectionOneData.bgImg}
            />
    );
}

const SectionOne = () => {
    return (
        <>
            <div className="deals-just-in" >

                {sectionOneData.map(createCard)}

            </div>
        </>
    )
}

export default SectionOne
