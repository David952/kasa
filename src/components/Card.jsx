import { Link } from 'react-router-dom'
import Logements from '../api/logements.json'

function Card() {
    return (
        <>
            {
                Logements && Logements.map( logement => {
                    return (
                        <div className='card' key={ logement.id }>
                            <Link to="/logements/:id" className='card__link'>
                                <img className='card__image' src={ logement.cover } alt="Logement"></img>
                                <p className='card__title'>{ logement.title }</p>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Card;