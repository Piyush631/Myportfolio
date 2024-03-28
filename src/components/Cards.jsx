import React from 'react'

function Cards({data}) {
  return (
    <div>
        <div className='w-auto sm:w-[50vh]  h-auto border-2 border-gray-600 rounded-lg overflow-hidden '>
    <div> 
      <img className='h-1/2' src={data.ref} alt="" />
    </div>
    <div className='mt-2 ml-2'>
    <h1 className='font-semibold ml-2' > {data.name}</h1> 
 <p className='mt-2 ml-2'> {data.desc}
    </p>
    </div>
    <div className='mt-2 flex flex-wrap gap-2 ml-2 '>
   

              <button className="border-2  border-gray-300 text-black rounded-lg px-2 py-1">{data.tech[0]}</button>
              <button className="border-2  border-gray-300 text-black rounded-lg px-2 py-1">{data.tech[1]}</button>
              <button className="border-2  border-gray-300 text-black rounded-lg px-2 py-1">{data.tech[2]}</button>
              <button className="border-2  border-gray-300 text-black rounded-lg px-2 py-1">{data.tech[3]}</button>
           
    </div>
    <div className='flex justify-center gap-5 m-4'>
    <div>
<button className='bg-black text-2xl text-white pl-10 pr-10  rounded-xl'><a href={data.live}>Live</a></button>
    </div>
    <div>
    <button className='bg-black text-2xl text-white  rounded-xl'><a href={data.src}>Source Code</a></button>
    </div>
    </div>
 
   
    </div>
    </div>
  )
}

export default Cards