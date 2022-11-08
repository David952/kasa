import { useLoaderData, Navigate } from 'react-router-dom';

import { getHousing } from './housings';

import Header from '../../components/Header';
import Carousel from '../../components/Housing/Slideshow';
import Avatar from '../../components/Housing/Avatar';
import Tag from '../../components/Housing/Tag';
import Star from '../../components/Housing/Star';
import Collapse from '../../components/Collapse';
import Footer from '../../components/Footer';

export function loader({ params }) {
  return getHousing(params.housingId);
}

export default function Housing() {
  const housing = useLoaderData();

  if (!housing) {
    return <Navigate to="/404" replace={true}></Navigate>;
  }

  return (
    <>
      <Header />
      <main className="housing" key={housing.id}>
        <Carousel CarouselImages={housing.pictures} />

        <div className="housing__datas">
          <div className="housing__data-1">
            <div className="housing__title-loc">
              <h1>{housing.title}</h1>
              <div>
                <p>{housing.location}</p>
              </div>
            </div>
            <div className="housing__tags">
              {housing.tags.map((tag) => (
                <Tag key={tag} TagText={tag} />
              ))}
            </div>
          </div>
          <div className="housing__data-2">
            <div className="housing__name-avatar">
              <div className="housing__name">
                <p>{housing.host.name}</p>
              </div>
              <Avatar PictureSrc={housing.host.picture} />
            </div>
            <div className="housing__rating">
              <Star StarRating={housing.rating} />
            </div>
          </div>
        </div>
        <div className="housing__collapse">
          <Collapse
            CollapseClass="collapse description"
            CollapseClassTitle="collapse__title-Housing"
            CollapseTitle="Description"
            CollapseClassText="collapse__container_text-Housing"
            CollapseText={housing.description}
          />
          <Collapse
            CollapseClass="collapse equipments"
            CollapseClassTitle="collapse__title-Housing"
            CollapseTitle="Équipements"
            CollapseClassText="collapse__container_text-Housing"
            CollapseText={housing.equipments}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
