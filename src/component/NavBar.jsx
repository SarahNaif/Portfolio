import React from 'react'

import { hero } from '../data/data'
const NavBar = ({toggleTheme, darkMode}) => {

  return (
    <div className='mb-20 '>
    <div className='flex flex-row items-center justify-between w-full'>
      <div className='w-13 h-13 rounded-full relative overflow-hidden'>
        <span className=''>
          <img src='https://res.cloudinary.com/dvukj9sqf/image/upload/v1662506933/up_pobktq.gif' className='h-16' />
          </span>
      </div>
{ darkMode ?
      <img
              src="/static/icons/sun.svg"
              width={30}
              height={30}
              alt="sun icon"
              onClick={toggleTheme}
            />
             : 
            <img
            src="/static/icons/moon.svg"
            width={25}
            height={25}
            alt="moon icon"
            onClick={toggleTheme}
          />
            
            }
    </div>
  <h1 className="mt-5 mb-4 font-bold text-xl ">{hero.title}</h1>
  <p className="text-lg text-slate-500 font-medium">{hero.desc}</p>

  </div>
  )
}

export default NavBar