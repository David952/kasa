import { useState } from 'react';
import useImagePreloader from '../../hooks/imgPreload';

export default function Carousel(props) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const { imagesPreloaded } = useImagePreloader(props.CarouselImages);
  const length = props.CarouselImages.length;

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
          <div className="carousel__container" key={index}>
            {index === sliderPosition && (
              <>
                <img
                  className="carousel__container-image"
                  src={image}
                  alt="Logement dans un carrousel"
                />
                <p className="carousel__container-text">
                  {index + 1} / {length}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      {length > 1 && (
        <>
          <span className="carousel__arrows arrow-left" onClick={prevSlide}>
            ❮
          </span>
          <span className="carousel__arrows arrow-right" onClick={nextSlide}>
            ❯
          </span>
        </>
      )}
    </div>
  );
}
