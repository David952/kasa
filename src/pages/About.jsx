import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse/About";
import Footer from "../components/Footer";

import image from "../assets/Banner/About/kalen-emsley-Bkci_8qcdvQ-unsplash.png"


function About() {
    return (
        <React.Fragment>
            <Header />
            <Banner 
                BannerClassImage='banner__image-About'
                img={image}
                alt='Montagne'
            />
            <main className="About__container">
                <Collapse 
                    CollapseTitle='Fiabilité'
                    CollapseText='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
                />
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default About;