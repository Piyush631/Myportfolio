import React, { useEffect, useState } from 'react'

function Play() {
    const [rotate,setRotate]=useState(0);
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let movex=e.clientX
            let movey=e.clientY;
            let deltaX=movex-window.innerWidth/2;
            let deltaY=movey-window.innerHeight/2;
            var angle=Math.atan2(deltaX,deltaY)*(180/Math.PI);
            setRotate(angle-180);

        })
    })
  return (
    <div>
        <div className=' hidden sm:block eyes w-full h-screen overflow-hidden bg-[#EFEFEF]'>
    <div data-scroll  data-scroll-speed="-.7" className=" relative h-full w-full bg-cover  bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className=' absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex gap-8'>
            <div className= ' relative h-[15vw] w-[15vw] bg-zinc-100 rounded-full'>
            <div className=' absolute h-2/3 w-2/3 bg-zinc-900 rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  absolute line w-full h-8  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <div className=' absolute h-6 w-6 bg-zinc-100 rounded-full  '>
                
                </div>
           </div>
           
                </div>
                </div>
              <div className= ' relative h-[15vw] w-[15vw] bg-zinc-100 rounded-full'>
            <div className=' absolute h-2/3 w-2/3 bg-zinc-900 rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  absolute line w-full h-8  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <div className=' absolute h-6 w-6 bg-zinc-100 rounded-full  '>
                
                </div>
           </div>
           
                </div>
                </div>

        </div>
    </div>
        </div>
    </div>
  )
}

export default Play