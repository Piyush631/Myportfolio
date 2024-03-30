import React from 'react'

function Skills() {
  return (
    <div>
         <div className='w-screen  mt-4 bg-[#CDEA68]  '>
  <div className='flex flex-col text-center items-center gap-4 flex-wrap  '>

 
      <div className='intro text-6xl font-semibold pt-12 mb-3'>
        <h1>My Skills</h1>

      </div>
      <div className='cards flex gap-5 flex-wrap'>
        <div className='sm:h-[50vh] sm:w-[45vh] h-[35vh] w-[30vh] bg-white rounded-xl mb-4'> 
        <div className='mt-3 sm:text-2xl ml-4 sm:font-semibold text-xl'>
          <h1>Languages</h1>
        </div>
        <div className='mt-4 ml-4 flex flex-col gap-3'>
        
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png "></img> 
          <p className='font-semibold sm:text-xl text-lg'>HTML5</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"></img> 
          <p className='font-semibold text-xl'>CSS</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://www.citypng.com/public/uploads/small/11662226392uom4gsi9ddb1c81ipfx2u4imargvwq7uskhdui1pj4f6xufjz0jkfzqzduhjuifts0dzcnykgszw6isfutq2nlwb51ef4gm0dt8d.png"></img> 
          <p className='font-semibold text-xl'>Javascript</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8 rounded-full'src="https://w7.pngwing.com/pngs/79/15/png-transparent-java-servlet-computer-icons-programming-language-java-miscellaneous-logo-computer-programming-thumbnail.png"></img> 
          <p className='font-semibold text-xl'>Java</p>
        </div>
           
        </div>

        </div>
        <div className='h-[50vh] w-[45vh]  bg-white rounded-xl'> 
        <div className='mt-3 text-2xl ml-4 font-semibold'>
          <h1>Tools/Database</h1>
        </div>
        <div className='mt-4 ml-4 flex flex-col gap-3'>
        
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png"></img> 
          <p className='font-semibold text-xl'>Git</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8 rounded-full'src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"></img> 
          <p className='font-semibold text-xl'>Git hub</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://www.pngrepo.com/png/331488/512/mongodb.png"></img> 
          <p className='font-semibold text-xl'>Mongo Db</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8 rounded-full'src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"></img> 
          <p className='font-semibold text-xl'>Java</p>
        </div>
           
        </div>

        </div>
        <div className='h-[50vh] w-[45vh]  bg-white rounded-xl'> 
        <div className='mt-3 text-2xl ml-4 font-semibold'>
          <h1>Framework/Library</h1>
        </div>
        <div className='mt-4 ml-4 flex flex-col gap-3'>
        
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"></img> 
          <p className='font-semibold text-xl'>React js</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"></img> 
          <p className='font-semibold text-xl'>Node.js/Express.js</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8'src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"></img> 
          <p className='font-semibold text-xl'>Tailwind Css</p>
        </div>
        <div className='flex gap-5'>
        <img className='h-8 w-8 rounded-full'src="data:image/png;base64,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"></img> 
          <p className='font-semibold text-xl'>BootStrap</p>
        </div>
           
        </div>

        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Skills