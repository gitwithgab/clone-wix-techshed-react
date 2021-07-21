import React from 'react'

const SectSixCard = (props) => {
    return (
        <>
            

            <div className="section-six">

                    <div>
                        <p >
                            {props.title}
                        </p>
                    </div>

                    <div>
                            <img src={props.img} alt="product photos" />
                    </div>


                    <div>
                        <p>
                            {props.description}
                        </p> 
                    </div>

                    <div>
                        <div>
                            <p>
                                {props.price}
                            </p>
                        </div>
                        <div>
                            <p>
                                {props.salePrice}
                            </p>
                        </div>

                    </div>

            </div>
        </>
    )
}

export default SectSixCard
