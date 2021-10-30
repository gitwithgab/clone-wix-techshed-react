import React from 'react';


const SectionOne = (props) => {
    return (
        <>
            
                    <div className="section-one" 
                         style={{ backgroundImage: `url(${props.bgImg})`, 
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center',
                         width:'100%',
                         height:'40vh',
                         
                         }}>
                            <div>
                                <p> {props.title}</p>

                                <h2>
                                    {props.subtitle}
                                </h2>

                                <p>{props.description}</p>

                                <button>{props.button}</button>
                            </div>

                    </div>
                    
 
        </>
    )
}

export default SectionOne
