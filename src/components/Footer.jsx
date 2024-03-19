import React from 'react'

function Footer() {
  return (
    <div>
        <div   className='h-[40vh] w-full bg-[#F1F1F1]'>
  <div className='flex  flex-col items-center gap-6 pt-12'>
  <p className='text-3xl'>वो जन्नत ही क्या ? जो एक पल में मिल जाए ।</p>
  <div className='flex gap-4 text-2xl  font-semibold'>
    <p className='hover:text-sky-700 hover:text-3xl'><a href="https://www.linkedin.com/in/piyush068/" >LinkedIn</a></p>
    <p className='hover:text-sky-700 hover:text-3xl'><a href="https://github.com/Piyush631" >GitHub</a></p>

    <p className='hover:text-sky-700 hover:text-3xl'><a href="https://leetcode.com/piyush631/" >LeetCode</a></p>

  </div>
  <div className='text-xl font-semibold'>
    <p>Made by a Piyush</p>
    <div className='border-black w-[25vh] border-b-2 mt-1'>

    </div>
  </div>
  </div>

</div>
    </div>
  )
}

export default Footer