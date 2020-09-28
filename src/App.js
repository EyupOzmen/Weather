import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

import WeatherData from './components/WeatherData'

const App = ()  => {
  const [weatherData,setWeatherData]=useState([])
  const [weather,setWeather]=useState({})
  useEffect(() => {
    async function fetchData(){
      const request= await axios({
        method:'get',
        url:`https://weatherbit-v1-mashape.p.rapidapi.com/current?city=Istanbul&lang=tr`,
        headers:{
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
	        "x-rapidapi-key": "8b9936b788msh828d5560ac9d096p1293ecjsn564c7c09cdba"
        }
      })
      console.log(request.data.data[0])
      setWeatherData(request.data.data[0])
      setWeather(request.data.data[0].weather)
      return request.data
    }
    fetchData()
  },[])

  
  return (
    <div className="container">
      <WeatherData 
        city_name={weatherData.city_name}
        ob_time={weatherData.ob_time}
        url={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
        temp={weatherData.temp}
        description={weather.description}
      />
    </div>
  );
}

export default App;
