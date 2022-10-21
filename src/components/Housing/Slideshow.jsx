import { useState } from 'react';

export default function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);

  const prevSlideHandler = () => {
    const index =
      sliderPosition > 0 ? sliderPosition - 1 : props.CarouselImages.length - 1;
    setSliderPosition(index);
  };

  const nextSlideHandler = () => {
    const index =
      sliderPosition < props.CarouselImages.length - 1 ? sliderPosition + 1 : 0;
    setSliderPosition(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__image">
        {props.CarouselImages.map((image, index) => (
          <img key={index} src={image} alt="Logement dans un carrousel" />
        ))}
      </div>
      <span className="carousel__arrows arrow-left" onClick={prevSlideHandler}>
        ❮
      </span>
      <span className="carousel__arrows arrow-right" onClick={nextSlideHandler}>
        ❯
      </span>
    </div>
  );
}
