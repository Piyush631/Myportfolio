import React from 'react'

function Certification() {
  return (
    <div>
        <div  className='  w-full overflow-hidden'>
  <div className='heading mt-6'>
    <h1 className='text-center uppercase text-sm sm:text-[33px] font-semibold'>Check out some of my certification</h1>
    <div className=' hidden border-b-4 border-black rounded-m h-4 w-[90vh] ml-96 sm:block'>

    </div>

  </div>
  <div className='mt-12 ml-6 flex flex-col gap-12 justify-evenly sm:flex-row'> 
  <div className='h-[30vh] w-[43vh]'>
<img src="/public/java.png" alt="" />
</div>
<div className=' h-[30vh] w-[43vh]'>
<img src="/public/web.png" alt="" />
</div>
<div className=' h-[30vh] w-[43vh]'>
<img src="/public/react.png" alt="" />
</div>

  </div>
 
 </div>
        </div>
  )
}

export default Certification