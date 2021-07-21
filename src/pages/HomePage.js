import React from 'react'
import Header from "../components/header/Header";
import Hero from "../components/hero/HeroContainer";
import SectionOne from "../components/home-section-data/SectionOne";
import SectionTwo from "../components/home-section-data/SectionTwo";

const HomePage = () => {
    return (
        <>

            <body>

                <Header />

                <main>

                    <Hero />

                    <SectionOne />

                    <SectionTwo />

                </main>

            </body>
            
        </>
    )
}

export default HomePage
