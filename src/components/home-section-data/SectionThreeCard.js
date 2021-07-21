import React from 'react'

const SectionThreeCard = (props) => {
    return (
        <>

                <h4> Best Sellers </h4>

                
                <div>
                    <div>
                        <p>
                            {props.title}
                        </p>
                    </div>

                    <div>
                        <img src={props.img} />
                    </div>

                    <div>
                        <p>
                            {props.subtitle}
                        </p> 
                    </div>

                    <div>
                        <p>
                            {props.price} <span> {props.salePrice}</span>
                        </p>
                    </div>

                </div>
                
        </>
    )
}

export default SectionThreeCard
