import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { LoginScreen } from '../components/login/LoginScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MarvelScreen />}></Route>
        <Route path='/marvel' element={<MarvelScreen />}></Route>
        <Route path='/dc' element={<DcScreen />}></Route>
        <Route path='/search' element={<SearchScreen/>}></Route>
        <Route path='/login' element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
