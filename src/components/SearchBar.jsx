import React, { useState } from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

function SearchBar({ setCity, unit, setUnit }) {
  const [inputcity, setInputcity] = useState("");

  const handleSearch = () => {
    if (inputcity !== "") setCity({ q: inputcity });
  };

  const handleCurrentLocatiom= ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
      setCity({lat,lon})
      })
    }
  }
  const handleunit = (e) =>{
    const currentUnit = e.currentTarget.name
    if(unit!==currentUnit) setUnit(currentUnit)
  }
  return (
    <div className="flex flex-row justify-around my-6">
      <div className="flex flex-row items-center justify-center space-x-4">
        <input
          type="text"
          value={inputcity}
          onChange={(e) => setInputcity(e.currentTarget.value)}
          className="text-xl font-light p-1 shadow-xl focus:outline-none capitalize"
          placeholder="search cities..."
        />
        <UilSearch
          onClick={handleSearch}
          size={25}
          className="text-white cursor-pointern transition ease-out hover:scale-125"
        />
        <UilMapMarker
        onClick={handleCurrentLocatiom}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        <button
        onClick={handleunit}
          name="metric"
          className="text-white text-xl px-3 cursor-pointer transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="text-white">|</p>
        <button
          onClick={handleunit}
          name="imperial"
          className="text-white text-xl px-3 cursor-pointer transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
