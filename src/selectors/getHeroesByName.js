import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  console.log('called');
  name = name.toLocaleLowerCase();
  if(name === ''){
    return [];
  }
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))

}