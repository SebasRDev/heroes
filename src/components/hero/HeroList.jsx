import { useMemo } from 'react';
import './HeroList.css'

import { HeroCard } from './HeroCard';

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({publisher}) => {
  
  const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <ul className='heroes__wrapper animate__animated animate__backInDown'>
        {heroes.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            />
          )
        )}
      </ul>
    </>
  )
}
