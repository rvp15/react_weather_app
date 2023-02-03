import React from 'react'
import { luxonFormatToLocalTime } from '../apiservices/weatherapi'

function TimeandLocation({weather:{dt,name,timezone,sys}}) {
  // var day= new Date(dt*1000)
  // console.log(day.toUTCString())
  return (
    <div>
    <div className='flex items-center justify-center my-6 '>
        <p className='text-white text-xl font-light'>
            {luxonFormatToLocalTime(dt,timezone)}
        </p>
    </div>

    <div className='flex items-center justify-center my-4'>
        <p className='text-white text-2xl font-bold'> {name},{sys.country}</p>
    </div>
    </div>
  )
}

export default TimeandLocation
