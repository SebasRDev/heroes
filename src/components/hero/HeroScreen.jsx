import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

import './HeroScreen.css'

export const HeroScreen = () => {

  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  const navigate = useNavigate();

  const {
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
  } = hero;

  if(!hero){
    return <Navigate to="/" />
  }

  const handleGoBack = () =>{
    navigate(-1)
  }

  return (
    <div className='flex flex-col sm:flex-row items-center hero__wrapper'>
      <div className='hero__image'>
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className='px-8 text-white hero__info'>
        <h1 className='text-6xl font-black uppercase'>{superhero}</h1>
        <p className='text-slate-400 text-3xl mb-8'>{alter_ego}</p>
        <p className='text-sm text-slate-400'>Prersonajes: </p>
        <p className='mb-8'>{characters}</p>
        <p className='text-sm text-slate-400'>Primera aparicion: </p>
        <p className='mb-16'>{first_appearance}</p>
        <img 
          className='hero__content__icon'
          src={`/assets/icons/${publisher === 'DC Comics' ? 'dc' : 'marvel'}_icon.png`}
          alt={publisher} 
        />
      </div>
      <button 
        onClick={handleGoBack}
        className="p-2 rounded-full hover:bg-gray-100 cursor-pointer back__button transition-all"
      >
        <svg class="h-9 w-9 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  )
}
