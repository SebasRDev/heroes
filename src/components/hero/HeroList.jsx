import './HeroList.css'

import { HeroCard } from './HeroCard';

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <ul className='heroes__wrapper'>
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
