import React from 'react'
import { UilSearch,UilMapMarker} from '@iconscout/react-unicons'
function SearchBar() {
  return (


    <div className='flex flex-row justify-around my-6'>
   <div className='flex flex-row items-center justify-center space-x-4'>
<input type="text" className='text-xl font-light p-1 shadow-xl focus:outline-none capitalize' placeholder='search cities...' />
 <UilSearch size={25} className='text-white cursor-pointern transition ease-out hover:scale-125'/>
<UilMapMarker size={25} className='text-white cursor-pointer transition ease-out hover:scale-125'/>
    </div> 
    <div className='flex flex-row items-center justify-center'>
        <button name='celsius' className='text-white text-xl px-3 cursor-pointer transition ease-out hover:scale-125'>°C</button> 
        <p className='text-white'>|</p> 
        <button name='fahrenheit' className='text-white text-xl px-3 cursor-pointer transition ease-out hover:scale-125'>°F</button> 
        </div>
         </div>
  )
}

export default SearchBar
