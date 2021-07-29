import React from 'react';
import HelpBg from "../../assets/img/electronics-headphones-1.png"

const HelpCenter = () => {
    return (
        <>
            <div className="help-center"
                    style={{ backgroundImage: `url(${HelpBg})`, 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width:'100%',
                    height:'60vh'}}>

                    <div>
                            <h3>
                                Need Help? Check 
                                Out Our Help Center
                            </h3>
                            <p>
                                I'm a paragraph. Click here to add your own text
                                and edit me. Let your users get to know you.
                            </p>
                            <button>Go to Help Center</button>
                    </div>
        
            </div>
        </>
    )
}

export default HelpCenter
