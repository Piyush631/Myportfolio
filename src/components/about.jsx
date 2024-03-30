import React from 'react'


function About() {
  const downloadfileAtUrl=(url)=>{
    const fileName=url.split("/").pop();

    const aTag=document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

  };
  return (
   
         <div id="about" className='  bg-[#CDEA68] h-screen w-screen  rounded-tl-3xl rounded-tr-3xl flex flex-col sm:gap-12   '>
    <div className=' flex  justify-evenly  mt-12 overflow-hidden  max-[640px]:text-gray-200'> 
    <div>
    <p className='text-2xl font-semibold '>Aboutme</p>
    </div>
   
    
    <div>
      <p className=' h-[65vh] w-[37vh] text-sm sm:h-[45vh] sm:w-[150vh] sm:text-xl'>Hello, My name is Piyush  i pass my  B.tech in Computer Science Engineering from Himachal Insitute of Engineering and Technology Shahpur, My skills includes a decent foundation in java and javascript, from development perpective, i have done many project in React and Node (basically MERN ) for  Web and as these are nothing but just Javascript, So, I am well Good in JavaScript Ecosystem. For computer science fundamentals, I have a decent knowledge about Data Structure & Algorithm, Operating system, Database management system and Object Oriented Technique. I have also practiced coding by solving over 150+ problems on various coding platforms like Leetcode, GFG and Hackerrank</p>
    </div>

    </div>
    <div className='flex  sm:px-24 sm:gap-24 sm:mt-16 px-2 gap-2'> 
      
        <p className=' text-md font-semibold sm:text-lg sm:font-bold sm:py-4 py-1'>Education</p>
    
      <div className=' pl-12 sm:pl-16  text-lg sm:text-xl'>
        <p className='sm:text-2xl font-semibold text-xl' >Himacahal insitute of Engineering and Technology</p>
        <p>B.tech,Computer Science sept 2020-Aug2023</p>
        <p className='sm:font-semibold mt-2'>Course Work</p>
        <div className='flex flex-wrap gap-4 mt-1 mb-2'>
        {["DataStructure and Algorithm","Database Management System","operating System","object oriented Technique","Computer Networking"].map((item,index)=>
            (

              <button className="sm:text-xl  text-sm bg-black text-white rounded-lg px-2 py-1">{item}</button>
            )
            )}
        </div>
      </div>

    

   </div>
    </div>
  )
}

export default About