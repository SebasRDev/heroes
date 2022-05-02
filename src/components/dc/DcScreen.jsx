import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
  return (
    <div className='w-11/12 mx-auto px-4 sm:px-6 my-8'>
      <HeroList publisher="DC Comics" />

    </div>
  )
}
