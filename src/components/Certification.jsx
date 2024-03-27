import React from 'react'

function Certification() {
  return (
    <div>
        <div  className=' h-[60vh] w-full overflow-hidden'>
  <div className='heading mt-6'>
    <h1 className='text-center uppercase text-[33px] font-semibold'>Check out some of my certification</h1>
    <div className='border-b-4 border-black rounded-m h-4 w-[90vh] ml-96'>

    </div>

  </div>
  <div className='mt-12 ml-6 flex justify-evenly'> 
  <div className='h-[30vh] w-[43vh]'>
<img src="java.png" alt="" />
</div>
<div className=' h-[30vh] w-[43vh]'>
<img src="web.png" alt="" />
</div>
<div className=' h-[30vh] w-[43vh]'>
<img src="react.png" alt="" />
</div>

  </div>
 
 </div>
        </div>
  )
}

export default Certification