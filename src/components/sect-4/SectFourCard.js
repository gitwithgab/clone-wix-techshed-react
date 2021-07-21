import React from 'react'

const SectFourCard = (props) => {
    return (
        <>
                <div className="section-four">
                    <div>
                        <img src={props.img} alt="product photos"/>
                    </div>
                    <div>
                        <h6>
                            {props.title}
                        </h6>
                    </div>
                </div>
        </>
    )
}

export default SectFourCard
