import React from 'react';
import "../hero/Hero.css";
import HeroBg from "../../assets/img/electronics-carousel-1.png"

const HeroContainer = () => {


    return (
        <>
            <div className="hero-container"
                 style={{ backgroundImage: `url(${HeroBg})`, 
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',
                 width:'100%',
                 height:'90vh'
                 }}>

                <div>
                    <div>
                        <p>
                            Best Prices
                        </p>
                    </div>
                    <h1>
                        Incredible Prices <br/>on All Your <br/>Favorite Items
                    </h1>
                    <p>
                        Get more for less on selected brands
                    </p>
                    <button>
                        Shop Now
                    </button>
                </div>

            </div>
           
        </>
    )
}

export default HeroContainer
