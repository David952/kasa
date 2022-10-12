import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse/About";
import Footer from "../components/Footer";

import image from "../assets/Banner/About/kalen-emsley-Bkci_8qcdvQ-unsplash.png"


function About() {
    
    const dataCollapse = [
        {
            AboutTitle: 'Fiabilité',
            AboutText: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
            isOpen: 'closed'
        },
        {
            AboutTitle: 'Respect',
            AboutText: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            isOpen: 'open'
        },
        {
            AboutTitle: 'Service',
            AboutText: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
            isOpen: 'closed'
        },
        {
            AboutTitle: 'Sécurité',
            AboutText: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
            isOpen: 'closed'
        },
    ];
    
    return (
        <React.Fragment>
            <Header />
            <Banner 
                BannerClassImage='banner__image-About'
                img={image}
                alt='Montagne'
            />
            <main className="About__container">
                {
                    dataCollapse && dataCollapse.map( data => {
                        return (
                            <Collapse 
                                CollapseIsOpen={data.isOpen}
                                CollapseTitle={data.AboutTitle}
                                CollapseText={data.AboutText}
                            />
                        )
                    })
                }
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default About;