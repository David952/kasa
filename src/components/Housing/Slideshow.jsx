import { useState } from 'react';

export default function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);

  const prevSlide = () => {
    setSliderPosition(
      sliderPosition === 0
        ? props.CarouselImages.length - 1
        : sliderPosition - 1
    );
  };

  const nextSlide = () => {
    setSliderPosition(
      sliderPosition === props.CarouselImages.length - 1
        ? 0
        : sliderPosition + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__item">
        {props.CarouselImages.map((image, index) => (
          <div className="carousel__image" key={index}>
            {index === sliderPosition && (
              <img src={image} alt="Logement dans un carrousel" />
            )}
          </div>
        ))}
      </div>
      <span className="carousel__arrows arrow-left" onClick={prevSlide}>
        ❮
      </span>
      <span className="carousel__arrows arrow-right" onClick={nextSlide}>
        ❯
      </span>
    </div>
  );
}
