import React from 'react'
import {motion} from 'framer-motion'
function Marque() {
  return (
 
         <div  data-scroll data-scroll-section  data-scroll-speed=".1" className=' none sm:w-full py-10 bg-[#004D43] rounded-tl-xl rounded-tr-xl max-[600px]:hidden'>
      <div className='border-t-2 border-b-2 border-white text flex overflow-hidden whitespace-nowrap text-white	'>
       <motion.h1 initial ={{x:0}} animate={{x:"-100%"}} transition={{ease :"linear",repeat:Infinity,duration:15}} className='text-[15vw] uppercase leading-1 font-semibold -mt-4 '>Full-Stack JavaScript Developer </motion.h1>
        <h1 className='text-[16vw] uppercase leading-1 font-semibold -mt-4 '>Full-Stack JavaScript Developer </h1>
        <h1 className='text-[16vw] uppercase leading-1 font-semibold -mt-4 '>Full-Stack JavaScript Developer </h1>
        

      </div>

    </div>
   
  )
}

export default Marque