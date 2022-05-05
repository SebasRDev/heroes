import { Link } from 'react-router-dom'
import './HeroCard.css'

export const HeroCard = ({
  id, 
  superhero, 
  publisher, 
  alter_ego
}) => {
  return (
    <Link to={`/heroes/hero/${id}`}>
      <div className='rounded-xl overflow-hidden hero__card animate__animated animate__fadeIn'>
        <img
          className='hero__img'
          src={process.env.PUBLIC_URL +`/assets/heroes/${id}.jpg`}
          alt={superhero}
        />
        <div className='hero__content'>
          <div>
            <h3 className='text-white font-bold text-2xl'>{superhero}</h3>
            <p className='text-white text-xs sm:text-base lg:text-lg'>{alter_ego}</p>
          </div>
          <img 
            className='hero__content__icon'
            src={process.env.PUBLIC_URL +`/assets/icons/${publisher === 'DC Comics' ? 'dc' : 'marvel'}_icon.png`}
            alt={publisher} 
          />
        </div>
      </div>
    </Link>
  )
}
