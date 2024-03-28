import React, { useEffect, useState } from 'react'
const pdffile="piyushresume.pdf";
function Resume() {
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
    const downloadfileAtUrl=(url)=>{
        const fileName=url.split("/").pop();
    
        const aTag=document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    
      };
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".1"  id="Resume">
         <div className='relative bg-[#CDEA68] h-[110vh] w-full flex flex-col'>
      <div className=' text-center pt-20 leading-none text-[169px] font-bold uppercase'>
        <h1 className=''>Want</h1>
        <h1>To Hire</h1>
        <h1>Me</h1>

      </div>
      <div className='flex gap-6'> 

     
      <div className=' relative  bottom-[415px]  left-[495px] flex gap-8'>
            <div className= ' relative h-[11vw] w-[11vw] bg-zinc-100 rounded-full'>
            <div className=' absolute h-2/3 w-2/3 bg-zinc-900 rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  absolute line w-full h-8  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <div className=' absolute h-4 w-4 bg-zinc-100 rounded-full  '>
                
                </div>
           </div>
           
                </div>
                </div>
              

        </div>
        <div className=' relative  bottom-[415px]  left-[495px] flex gap-8'>
            <div className= ' relative h-[11vw] w-[11vw] bg-zinc-100 rounded-full'>
            <div className=' absolute h-2/3 w-2/3 bg-zinc-900 rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
           <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  absolute line w-full h-8  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
           <div className=' absolute h-4 w-4 bg-zinc-100 rounded-full  '>
                
                </div>
           </div>
           
                </div>
                </div>
              

        </div>
     <div className='sm:ml-64'>
     <button className=' bg-black text-white w-32 rounded-xl h-8' onClick={()=>{downloadfileAtUrl(pdffile)}}> DownloadResume</button>

     </div>

      </div>

      </div>
      
 </div>
   
  )
}

export default Resume