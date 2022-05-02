import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {
 
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [searchValue, handleInputChange] = useForm({
    searchText: query
  })

  const {searchText} = searchValue;
  const heroesFitlered = useMemo(() => getHeroesByName(query),[query]);

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <div
      className="flex"
    >
      <div
        className="w-12/12 sm:w-6/12 py-8 sm:py-16 px-8"
      >
        <h1>Search</h1>
        <hr/>
        <form 
          className='flex flex-col'
          onSubmit={handleSearch}
        >
          <div className="relative z-0 w-full mt-10 mb-6 group">
            <input 
              type="text" 
              name="searchText"
              id="searchText"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-violet-500 appearance-none text-violet-500 focus:outline-none focus:ring-0 focus:border-violet-500 peer" placeholder=" "
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <label 
              htmlFor="searchText"
              className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Buscar un héroe
            </label>
          </div>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-5 py-2.5 self-end"
            type='submit'
          >
            Buscar
          </button>
        </form>
      </div>
      <div
        className="w-12/12 sm:w-6/12 py-8 sm:py-16 px-8 heroes__wrapper search__results"
      >
        <h4 className='col-span-full text-center'>Resultados de busqueda</h4>
        { (query === '') 
          ?
            <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 col-span-full text-center" role="alert">
              Busca un héroe
            </div>
        
          : (heroesFitlered.length === 0) 
            && 
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 col-span-full text-center" role="alert">
                <span className="font-medium">Ops!</span> Parece que no encontramos ningún heroe con el nombre <span className="font-extrabold">{query}</span>
              </div>
        }

        {
          heroesFitlered.map(hero => (
            <HeroCard 
              key={hero.id}
              {...hero}
            />
          ))
        }
      </div>
    </div>
  )
}
