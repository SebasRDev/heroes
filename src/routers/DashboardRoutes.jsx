import { Route, Routes } from "react-router-dom"
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl w-8/12 mx-auto container mt-4">
        <Routes>
          <Route path='/' element={<MarvelScreen />}></Route>
          <Route path='marvel' element={<MarvelScreen />}></Route>
          <Route path='dc' element={<DcScreen />}></Route>
          <Route path='hero' element={<HeroScreen />}></Route>
          <Route path='/search' element={<SearchScreen/>}></Route>
        </Routes>
      </div>
    </>
  )
}
