import React from 'react'
import Header from "../components/header/Header";
import Hero from "../components/hero/HeroContainer";
import SectionOne from "../components/sect-1/SectionOne";
import SectionTwo from "../components/sect-2/SectionTwo";
import SectionThree from "../components/sect-3/SectionThree";
import SectionFour from "../components/sect-4/SectFour";
import SectionFive from "../components/sect-5/SectFive";
import SectionSix from "../components/sect-6/SectSix";
import SectionSeven from "../components/sect-7/SectSeven";
import SectionEight from "../components/sect-8/SectEight";
import SectionNine from "../components/sect-9/SectNine";
import Footer from "../components/footer/Footer";

const HomePage = () => {
    return (
        <>

            <body>

                <Header />

                <main>

                    <Hero />

                    <SectionOne />

                    <SectionTwo />

                    <SectionThree />

                    <SectionFour />

                    <SectionFive />
                    
                    <SectionSix />

                    <SectionSeven />

                    <SectionEight />

                    <SectionNine />

                </main>

                <Footer />

            </body>
            
        </>
    )
}

export default HomePage
