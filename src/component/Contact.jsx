import React from 'react'
import { contact } from '../data/data'
const Contact = () => {
  return (
    <div>
        <div className="flex flex-row overflow-x-hidden w-full ">
    <h2 className="mt-5 mb-4 font-bold text-xl  mx-2 text-left whitespace-nowrap  ">
    Contact Me
    </h2>
    <span className="mt-8 h-0.5 w-full bg-black opacity-25 lg:full"></span>
  </div>
  <p className="text-lg text-slate-500 font-medium mx-2">
  Shoot me an email:{' '}
  <a
          className=" text-black transition-colors duration-500"
          href={`mailto:${contact.email}`}
        >
          {contact.email}
        </a>
        </p>

        <div className="flex space-x-5 mt-5 mb-5  ml-3 text-lightText transition-colors duration-500">
        {contact.github && (
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/icons/github.svg"
              width={20}
              height={20}
              alt="Github icon"
            />
          </a>
        )}
   
        {contact.linkedin && (
          <a
            href={`https://linkedin.com/in/${contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/static/icons/linkedin.svg"
              width={20}
              height={20}
              alt="LinkedIn icon"
            />
          </a>
        )}
      </div>
        


  </div>
  )
}

export default Contact