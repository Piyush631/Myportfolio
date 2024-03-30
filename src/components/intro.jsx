import { motion } from 'framer-motion'
import React from 'react'

function Intro() {
  
  return (
    <div>
         <div data-scroll data-scroll-section  data-scroll-speed="-.3" className=' h-[60vh] w:full sm:h-screen  sm:flex align-center justify-between px-12  mt-24 sm:mt-12'>
      <div className='mt-12 textstructure'>
      {["Hi I Am","A FullStack","Web Developer"].map((item,index)=>{
        return   <div className=" masker ">
     <div className='w-fit flex items-end  overflow-hidden gap-1'>
     {index===1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76,0,0.24,1],duration:2}} className=" hidden sm:block w-[8vw] h-[5.2vw] relative -top-[1vw] bg-red-500 rounded-lg"> </motion.div>) }
     <h1 className='  pt-w[2vw] mb-[1vw] leading-[.90] tracking-tight font-semibold sm:text-8xl  text-2xl'>{item}</h1>
     </div>
     
      </div>
      })}
      </div>
     <div className='mt-16'>
      <img src="image.JPG"  className=' h-[18vh] w-[18vh] sm:h-[35vh] sm:w-[35vh] rounded-md' alt="" />
     </div>
     
      
     </div>
    </div>
  )
}

export default Intro