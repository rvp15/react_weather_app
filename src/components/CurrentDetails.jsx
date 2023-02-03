import React from 'react'
import { UilTemperature,UilTear,UilWind,UilBrightness,UilSunset,UilArrowUp,UilArrowDown    } from '@iconscout/react-unicons'
import { iconUrl, luxonFormatToLocalTime } from '../apiservices/weatherapi'

function CurrentDetails({weatherdetail}) {
 console.log(weatherdetail)
//  weatherdetail.main.temp
  return (
    <div>

   <div className='flex="true" items-center justify-center py-6 text-xl text-white'>
    <p>{weatherdetail.weather[0].description}</p>
   </div>
 
 <div className='text-white flex flex-row items-center justify-between py-3'>
    <img src={iconUrl(weatherdetail.weather[0].icon)} alt="sunimage" className='w-25'/>
    <p className='text-4xl'>{Math.round(weatherdetail.main.temp)-273}°</p>
    <div flex flex-col items-center >
        <p className='flex py-3'><UilTemperature/>Feels Like: {weatherdetail.main.feels_like.toFixed()-273}°</p>
        <p className='flex'><UilTear/>Humidity: {weatherdetail.main.humidity}%</p>
        <p className='flex py-3'><UilWind/>Wind: {weatherdetail.wind.speed} km/h</p>
    </div>
 </div>

 <div className='text-white font-medium flex flex-row items-center justify-between py-3'> 
 <div className='flex'><UilSunset/> <p>Rise: <span>{luxonFormatToLocalTime(weatherdetail.sys.sunset,weatherdetail.timezone, "hh:mm a")}</span></p></div>
   
    <div className='flex flex-row '><UilBrightness/> <p>Set: <span>{luxonFormatToLocalTime(weatherdetail.sys.sunrise,weatherdetail.timezone, "hh:mm a")}</span></p></div>
    <div className='flex'><UilArrowUp/><p>High_Temp: <span> {(weatherdetail.main.temp_max.toFixed())}°</span></p></div>
    <div className='flex'><UilArrowDown/><p>Low_Temp: <span>{(weatherdetail.main.temp_min.toFixed())}°</span> </p></div>
</div>

    </div>
  )
}

export default CurrentDetails
