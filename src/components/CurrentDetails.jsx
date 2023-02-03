import React from 'react'
import { UilTemperature,UilTear,UilWind,UilBrightness,UilSunset,UilArrowUp,UilArrowDown    } from '@iconscout/react-unicons'

function CurrentDetails() {
  return (
    <div>

   <div className='flex items-center justify-center py-6 text-xl text-white'>
    <p>Rain</p>
   </div>
 
 <div className='text-white flex flex-row items-center justify-between py-3'>
    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="sunimage" className='w-25'/>
    <p className='text-4xl'>32°</p>
    <div flex flex-col items-center >
        <p className='flex py-3'><UilTemperature/>Real feel: 14°</p>
        <p className='flex'><UilTear/>Humidity: 55%</p>
        <p className='flex py-3'><UilWind/>Wind: 4 km/h</p>
    </div>
 </div>

 <div className='text-white font-medium flex flex-row items-center justify-between py-3'>
    <div className='flex'><UilBrightness/> <p>Rise: <span> 02:50 AM</span></p></div>
    <div className='flex'><UilSunset/> <p>Set: <span> 06:17 PM</span></p></div>
    <div className='flex'><UilArrowUp/><p>High: <span> 21°</span></p></div>
    <div className='flex'><UilArrowDown/><p>Low: <span>2°</span> </p></div>
</div>

    </div>
  )
}

export default CurrentDetails
