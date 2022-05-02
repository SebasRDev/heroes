import { Outlet, Route, Routes } from "react-router-dom"
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from "../components/hero/HeroScreen"
import Home from "../components/home/Home"
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="sm:w-10/12 mx-auto container">
        <Routes>
            <Route path='/heroes' element={<Home />}>
            <Route path='marvel' element={<MarvelScreen />}/>
            <Route path='dc' element={<DcScreen />}/>
            <Route path='hero/:heroId' element={<HeroScreen />}/>
            <Route path='search' element={<SearchScreen/>}/>
          </Route>
          
        </Routes>

        <Outlet />
      </div>
    </>
  )
}
