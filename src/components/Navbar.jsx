import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {

  return (

    <div>
        <BrowserRouter>
      
         <div className=" fixed top-1  bg-gradient-to-l from-white  to-transparent flex justify-between w-full px-12 py-3">
          <div>
            <p>piyush</p>
          </div>
          <div className=' links flex gap-6 '>
          <ul className='flex gap-5 mr-12 text-xl font-semibold'>
            <li><Link to="#app">Home</Link></li>
            <li><Link  to="#about">About</Link></li>
            <li><Link to="#project">Project</Link></li>
            <li><Link to="#Resume">Resume</Link></li>
          </ul>

             
          
          </div>
      </div>
      </BrowserRouter>
    </div>
  
  )
}

export default Navbar