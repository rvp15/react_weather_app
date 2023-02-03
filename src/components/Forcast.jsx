import React from 'react'

function Forcast({title}) {
  return (
    <div className='flex flex-col text-white my-5'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <hr className='my-1'/>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col font-medium items-center'>
            <p>02:00 PM</p> 
            <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-14'/>
            <p>22°</p>
        </div>
        <div className='flex flex-col font-medium items-center '>
            <p>02:00 PM</p> 
            <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-14 '/>
            <p>22°</p>
        </div>

        <div className='flex flex-col items-center font-medium'>
            <p>02:00 PM</p> 
            <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-14 '/>
            <p>22°</p>
        </div>
        <div className='flex flex-col items-center font-medium'>
            <p>02:00 PM</p> 
            <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-14 '/>
            <p>22°</p>
        </div>
        <div className='flex flex-col font-medium items-center '>
            <p>02:00 PM</p> 
            <img src='https://openweathermap.org/img/wn/01d@2x.png' alt='img' className='w-14 '/>
            <p>22°</p>
        </div>
      </div>
    </div>
  )
}

export default Forcast
