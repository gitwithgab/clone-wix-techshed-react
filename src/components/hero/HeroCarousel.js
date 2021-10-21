import React from 'react';
import {Carousel1} from "../../assets/img/electronics-carousel-1.png"
import {Carousel2} from "../../assets/img/electronics-carousel-2.png"
import {Carousel3} from "../../assets/img/electronics-carousel-3.png"

const HeroCarousel = () => {

    let slideIndex = 0;
    carousel();

    const carousel = () => {
        let i;
        let x = [];

        for (i =0; i<x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex ++;
        if(slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
    }

    return (
        <div>
            <img class="mySlides" src={Carousel1} style = {width="100%"}/>
            <img class="mySlides" src={Carousel2} style = {width="100%"}/>
            <img class="mySlides" src={Carousel3} style = {width="100%"}/>
        </div>
    )
}

export default HeroCarousel
