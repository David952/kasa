import React from "react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

import image from "../assets/Banner/Home/eric-muhr-P_XxsdVgtpQ-unsplash.png"


function Home() {
  return (
    <React.Fragment>
        <Header />
        <Banner 
          BannerClassImage='banner__image-Home'
          img={image}
          alt='Bord de falaise'
          BannerClassText='banner__text-Home'
          BannerText='Chez vous, partout et ailleurs'
        />
        <main className="Home__container">
            <Card />
        </main>
        <Footer />
    </React.Fragment>
  );
}

export default Home;