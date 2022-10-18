import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { getHousing } from './housings';

import Header from '../../components/Header';
import Carousel from '../../components/Housing/Carousel';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';

export function loader({ params }) {
  return getHousing(params.housingId);
}

export default function Housing() {
  const housing = useLoaderData();
  const descriptionTxt = housing.description;
  const equipmentsTxt = housing.equipments;

  return (
    <React.Fragment>
      <Header />
      <main className="housing" key={housing.id}>
        <Carousel
          CarouselImg={housing.pictures[0]}
          CarouselImg2={housing.pictures[1]}
          CarouselImg3={housing.pictures[2]}
          CarouselImg4={housing.pictures[3]}
          CarouselImg5={housing.pictures[4]}
        />

        <div className="housing__datas">
          <div className="housing__data-1">
            <div className="housing__title-loc">
              <h1>{housing.title}</h1>
              <div>
                <p>{housing.location}</p>
              </div>
            </div>
            <div className="housing__name-avatar">
              <div className="housing__name">
                <p>{housing.host.name}</p>
              </div>
              <div className="housing__avatar">
                <img src={housing.host.picture} alt="Visage" />
              </div>
            </div>
          </div>
          <div className="housing__data-2">
            <div className="housing__tags">
              <h1>{housing.tags}</h1>
            </div>
            <div className="housing__rating">
              <h1>{housing.rating}</h1>
            </div>
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse
            CollapseClass="collapse description"
            CollapseTitle="Description"
            CollapseText={descriptionTxt}
          />
          <Collapse
            CollapseClass="collapse equipments"
            CollapseTitle="Équipements"
            CollapseText={equipmentsTxt}
          />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
