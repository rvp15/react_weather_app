import React from 'react'
import { iconUrl } from '../apiservices/weatherapi'

function Forcast({title,detail}) {
  // console.log(detail)
  return (
    <div className='flex flex-col text-white my-5'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <hr className='my-1'/>
      <div className='flex flex-row items-center justify-between'>
        {detail.map((item)=>(
 <div className='flex flex-col font-medium items-center'>
            <p>{item.title}</p> 
            <img src={iconUrl(item.icon)} alt='img' className='w-14'/>
            <p>{`${(item.temp.toFixed())}`}°</p>
            {/* <p>{`${Math.floor((item.temp.toFixed())/100)}`}°</p> */}
        </div>

        ))}
       
      </div>
    </div>
  )
}

export default Forcast
