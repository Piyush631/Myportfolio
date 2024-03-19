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
   
         <div id="about" className='  bg-[#CDEA68]  w-full h-screen rounded-tl-3xl rounded-tr-3xl flex flex-col gap-12 '>
    <div className='flex  px-24 gap-24 mt-16 '> 
    <div>
    <p className='text-2xl font-bold py-4'>Aboutme</p>
    </div>
   
    
    <div>
      <p className=' w-full text-xl pl-12 flex flex-wrap max-[600px]:text-[20px]'>Hello, My name is Piyush  i pass my  B.tech in Computer Science Engineering from Himachal Insitute of Engineering and Technology Shahpur, My skills includes a decent foundation in java and javascript, from development perpective, i have done many project in React and Node (basically MERN ) for  Web and as these are nothing but just Javascript, So, I am well Good in JavaScript Ecosystem. For computer science fundamentals, I have a decent knowledge about Data Structure & Algorithm, Operating system, Database management system and Object Oriented Technique. I have also practiced coding by solving over 150+ problems on various coding platforms like Leetcode, GFG and Hackerrank</p>
    </div>

    </div>
    <div className='flex px-24 gap-24 mt-16'> 
      
        <p className='text-lg font-bold py-4'>Education</p>
    
      <div className='pl-16 text-xl'>
        <p className='text-2xl font-semibold' >Himacahal insitute of Engineering and Technology</p>
        <p>B.tech,Computer Science sept 2020-Aug2023</p>
        <p className='font-semibold mt-3'>Course Work</p>
        <div className='flex flex-wrap gap-4 mt-1 mb-2'>
        {["DataStructure and Algorithm","Database Management System","operating System","object oriented Technique","Computer Networking"].map((item,index)=>
            (

              <button className="bg-black text-white rounded-lg px-2 py-1">{item}</button>
            )
            )}
        </div>
      </div>

    

   </div>
    </div>
  )
}

export default About