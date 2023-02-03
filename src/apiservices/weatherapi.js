import { DateTime } from "luxon"

const API_KEY ='868f1076d62debf814f899677ab246e4'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const getFormattedData = async (city,unit)=>{
    const currentWeather = await getCurrentWeather('weather',city)
    // console.log(currentWeather)
   const lon = currentWeather.coord.lon
 const lat = currentWeather.coord.lat

 //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
 const hourlyforcast = await getCurrentWeather('onecall', {
    lat,lon,exclude:'current,minutely,alerts',
    unit:unit
 }).then(formatForecast)
 console.log(hourlyforcast)
    return {...hourlyforcast,...currentWeather}
}

const getCurrentWeather = async (option,city)=>{
    const url = new URL(BASE_URL + '/' + option);
    url.search = new URLSearchParams({...city,appid:API_KEY})

    const response = await fetch(url);
    return await response.json();
}
const formatForecast=(data)=>{
    console.log(data)
    let {timezone,daily,hourly} = data
    daily = daily.slice(0,5).map(item=>{
        return {
           title: luxonFormatToLocalTime(item.dt, timezone, 'ccc'),
           temp: item.temp.day,
           icon:item.weather[0].icon

        }
    })
    hourly = hourly.slice(0,5).map(item=>{
        return {
           title: luxonFormatToLocalTime(item.dt, timezone, 'hh:mm a'),
           temp: item.temp,
           icon:item.weather[0].icon

        }
    })
return {timezone,daily,hourly}
}


const luxonFormatToLocalTime = (secs,zone,format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a")=>DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

const iconUrl = (code)=>`https://openweathermap.org/img/wn/${code}@2x.png`
// const formatCurrentWeather=(data)=>{
//    const {
//     name,dt,
//     coord:{lat,lon},
//     main:{feels_like,temp,temp_min,temp_max,humidity,pressure},
//     wind:{speed},
//     sys:{country, sunrise,sunset},
// } =  data
// const {main,icon,description} = data.weather[0]

// return {name,dt,lat,lon,feels_like,temp,temp_min,temp_max,humidity,pressure,speed,country, sunrise,sunset,main,icon,description}
// }


export{iconUrl,luxonFormatToLocalTime}

export default getFormattedData;