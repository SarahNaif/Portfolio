import React from 'react'
import { stack } from '../data/data'

const Stacks = () => {
  return (
    <div className='mb-6'>
        <div className="flex flex-row overflow-x-hidden w-full ">
          <h2 className="mt-5 mb-4 font-bold text-xl  mx-2 text-left whitespace-nowrap  ">
          {stack.title}
          </h2>
          <span className="mt-8 h-0.5 w-full bg-black opacity-25 lg:full"></span>
        </div>

        <div className='w-full flex flex-wrap -m-2 mt-2'>
            {stack.stack.map((item,index)=>(
                <span 
                key={index} 
                className='flex flex-row content-center border font-semibold text-slate-500 border-slate-500  rounded-lg m-2 px-3 py-1'
                >
                    
  
                   <h3 className=''>{item.skill}  </h3> 
                </span>
               
            ))}

        </div>

    </div>
  )
}

export default Stacks