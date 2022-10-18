export default function Carousel(props) {
  return (
    <div className="carousel">
      <div className="carousel__image">
        <img src={props.CarouselImg} alt="Logement dans un carrousel" />
        <img src={props.CarouselImg2} alt="Logement dans un carrousel" />
        <img src={props.CarouselImg3} alt="Logement dans un carrousel" />
        <img src={props.CarouselImg4} alt="Logement dans un carrousel" />
        <img src={props.CarouselImg5} alt="Logement dans un carrousel" />
      </div>
      <label htmlFor="Slider" className="carousel__arrows arrow-left">
        <span>❮</span>
      </label>
      <label htmlFor="Slider" className="carousel__arrows arrow-right">
        <span>❯</span>
      </label>
    </div>
  );
}
