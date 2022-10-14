import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <Link to={'housings/' + props.housing.id} className="card__link">
        <img
          className="card__image"
          src={props.housing.cover}
          alt="Logement"
        ></img>
        <p className="card__title">{props.housing.title}</p>
      </Link>
    </div>
  );
}

export default Card;
