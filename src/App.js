
import './App.css';
import CitiesButton from './components/CitiesButton';
import hot from './assets/hot.jpg'
import SearchBar from './components/SearchBar';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TimeandLocation from './components/TimeandLocation';
import CurrentDetails from './components/CurrentDetails';
import Forcast from './components/Forcast';

import getFormattedData from './apiservices/weatherapi'

function App() {
  const startDataFetch = async()=>{
    const data = await getFormattedData( {q:'london'})
    console.log(data)
  }

  startDataFetch();

  return (
    <div style={{backgroundImage: `url(${hot})`,backgroundSize: 'cover'}} className="mx-auto max-w-screen-md mt-4 py-6 px-32  h-fit shadow-xl shadow-gray-400">
<CitiesButton/>
<SearchBar/>

<TimeandLocation/>
<CurrentDetails/>
<Forcast title={'Hourly Forecast'}/>
<Forcast title={'Daily Forecast'}/>
    </div>
  );
}

export default App;
