import React from 'react'
import { Header } from './Header';
import { HomeBoardScreen } from './HomeBoardScreen';


export const HomePage = () => {

  return (
    <div className='grid justify-items-center  h-screen pt-0 bg-zinc-900/90'>
      <div className='w-3/4 border-1 '>
        <div>
          <Header />
        </div>
        <div className='border-solid border border-gray-400 h-5/6 rounded text-white'>
          <HomeBoardScreen />
        </div>
      </div>
    </div>
  )
}
