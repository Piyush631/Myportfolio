import React from 'react'
import Cards from './Cards'

function Project() {
  const data=[
    {
      name:"Wanderlust Website",
      desc:"A LeetCode Clone website that have auth section to create users and reset password and most important it have real DSA problems which you can like real LeetCode",
      tech:["Html","css","JavaScript","Node js","MongoDb"],
      ref:"/public/airbnb.png",
      live:"https://airbnb-lite.onrender.com/listing",
      src:"https://github.com/Piyush631/Airbnb_lite"
    },
    {
      name:"Doctalk",
      desc:"Develop a website through which a user book a appointment from a doctors . User also get a various types of information regarding hospital etc.",
      tech:["Html","css","php","javacript"],
      ref:"/public/doctor.png",
    },
    {
      name:"Weather Prediction",
      desc:"Built on React  and Tailwind CSS, this app utilizes an API server to predict weather conditions and	providing users with accurate forecasts seamlessly",
      
      tech:["React","Html","tailwind","Api"],
      ref:"/public/weather.png",
      live:"https://github.com/Piyush631/WeatherPrediction",
      src:"https://github.com/Piyush631/WeatherPrediction"
    },
    {
      name:"Vanilla JavaScript projects",
      desc:"Designed a captivating set of projects, including a Simon Game, Dice Throw, Todo app using Vanilla JavaScript to reinforce fundamental concepts.",
      
      tech:["javascript","Html","css","bootstrap"],
      ref:"https://res-2.cloudinary.com/under-the-hood-learning/image/upload/q_auto/v1/blog_images/MVC-Vanilla-JS.png",
    },
    {
      name:"Visit Chamba",
      desc:"online travelling related website a where user get a information about various tourist places in Chamba and also book hotel and Taxi online",
      
      tech:["HtML","Css","javaScript","mysql"],
      ref:"/public/chamba.png",
    }
  ]
  return (
    <div id="project">
    <div className=' pl-12 '>
      <h1 className='text-[85px]'>My Projects</h1>
    </div>
    <div className='border-b-2 border-gray-300 mt-8' >

    </div>
   <div className='w-full flex flex-wrap gap-20 p-20'>
   { data.map((item,index)=>(

<Cards data={item} />
 ))}

    

   </div>
    
  </div>
  )
}

export default Project