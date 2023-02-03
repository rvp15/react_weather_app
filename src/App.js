
import './App.css';
import CitiesButton from './components/CitiesButton';
// import hot from './assets/hot.jpg'
import video from './assets/video.mp4'
import SearchBar from './components/SearchBar';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TimeandLocation from './components/TimeandLocation';
import CurrentDetails from './components/CurrentDetails';
import Forcast from './components/Forcast';
import { useEffect, useState } from 'react';
import getFormattedData from './apiservices/weatherapi'

function App() {
const [city,setCity] = useState({q: 'new york'})
const [unit,setUnit] =useState('metric')
const [weather,setWeather]=useState(null)

  const startDataFetch = async()=>{
    getFormattedData({...city,...unit}).then((data)=>{setWeather(data)})
    console.log(weather)
  }

  
useEffect(()=>{
startDataFetch();
},[city,unit])
// style={{backgroundImage: `url(${hot})`,backgroundSize: 'cover'}}
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted/>
    <div className="mx-auto  py-6 px-40  h-fit content">
<CitiesButton setCity={setCity}/>
<SearchBar setCity={setCity} unit={unit} setUnit={setUnit}/>
{weather && (
<div><TimeandLocation weather={weather}/>
<CurrentDetails weatherdetail={weather}/>
<Forcast detail={weather.hourly} title={'Hourly Forecast'}/>
<Forcast detail={weather.daily}  title={'Daily Forecast'}/></div>
)}
 </div>
 </div>
  );
}

export default App;
