import React from 'react'
import { projects } from '../data/data';
const Projects = () => {
  return (
    <div className=" ">
      <div>
        <div className="flex flex-row overflow-x-hidden w-full ">
          <h2 className="mt-5 mb-4 font-bold text-xl  mx-2 text-left whitespace-nowrap  ">
          {projects.title}
          </h2>
          <span className="mt-8 h-0.5 w-full bg-black opacity-25 lg:full"></span>
        </div>
        <p className="text-lg text-slate-500 font-medium mx-2">
        {projects.desc}
        </p>

        <div className='mt-8'>
        {projects.projects.map((item, index) => {
          return (
          <div 
          key={index} 
          className="p-6 border border-slate-500 rounded-xl mb-4">
            <h3 className='text-lg mx-2 text-left font-bold'>{item.title}</h3>
            <p className="text-lg text-slate-500 font-medium mx-2">{item.description}</p>
            <div className="flex items-center flex-wrap mt-1 pt-4">

            {item.link && (
                

                <a 
                href={item.link}
                className="flex items-center  py-1 px-3" 
                >
                <img 
                src="/static/icons/link.svg"
                className=''
                width={18}
                height={18}
                alt=' link icon'
                />
                <span className='ml-2 font-semibold text-slate-500 transition-colors duration-500'>
                {item.link}
                    </span>    
                </a>
            )}
            {item.github && ( 

                <a
                    href={`https://github.com/SarahNaif/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2 font-semibold text-slate-500 transition-colors duration-500">
                    {item.github}
                    </span>
                  </a>
            )}


            </div>

          </div>
            );
        })}
        </div>


      </div>
    </div>
  );
}

export default Projects