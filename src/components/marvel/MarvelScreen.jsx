import React from 'react'
import { HeroList } from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <div className='w-11/12 mx-auto my-8'>
      <HeroList publisher='Marvel Comics' />

    </div>
  )
}
