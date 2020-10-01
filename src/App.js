import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import "./App.css";
import { trackPromise } from "react-promise-tracker";
import {WeatherContext} from './context/WeatherContext'

import MapContainer from './MapContainer'
import WeatherData from "./components/WeatherData";
import NextDay from "./components/NextDay";

const App = () => {
  const [darkMode,setDarkMode]=useState(getInitialMode());
  const {location}=useContext(WeatherContext)
  const [weatherData, setWeatherData] = useState([]);
  const [weather, setWeather] = useState({});
  const [main, setMain] = useState({});
  const [weeklyData, setWeeklyData] = useState([
    {
    weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    {weather:[{icon:""}],
    temp:{day:''}
    },
    ]);

  useEffect(() => {
    localStorage.setItem("dark",JSON.stringify(darkMode))
  },[darkMode])


  function getInitialMode(){
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();

    if(isReturningUser){
      return savedMode;
    }else if (userPrefersDark){
      return true;
    }else{
      return false;
    }

  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

    //lat=${location.cLat}&lon=${location.cLong}
  const API_KEY='981ece1e18456e1998aee5a2bef4df42';
  
  useEffect(() => {
    async function fetchCurrentData() {
      const request = await axios({
        method: "get",
        url:
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.cLat}&lon=${location.cLong}&lang=tr&units=metric&appid=${API_KEY}`,
        // headers: {
        //   "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        //   "x-rapidapi-key":
        //     "8b9936b788msh828d5560ac9d096p1293ecjsn564c7c09cdba",
        // },
      });
      console.log(request.data)
      console.log(request.data.weather[0])
      setWeatherData(request.data);
      setWeather(request.data.weather[0]);
      setMain(request.data.main);
      return () => location={cLat:41.015137,
        cLong:28.97953};
    }

    fetchCurrentData();
  }, [location]);
  
  useEffect(() => {
    async function fetchWeeklyData() {
      const weeklyCall = await axios({
        method: "get",
        url:
        `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=Istanbul&lang=tr&units=metric&cnt=7`,
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "8b9936b788msh828d5560ac9d096p1293ecjsn564c7c09cdba",
        },
      });
      setWeeklyData(weeklyCall.data.list);
      console.log(weeklyCall.data.list);
      console.log(weeklyData[0])
      console.log(weeklyData[1])
    }
    fetchWeeklyData();
  }, []);

  return (
    <div className={darkMode ? "dark-mode": "light-mode"}>
       <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "yellow" : "grey" }}>☾</span>
          {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle
        </button> */}
        </div>
       </nav>
      <div className="map_current" >
     
      <WeatherData
        city_name={weatherData.name}
        ob_time={weatherData.ob_time}
        url={`http://openweathermap.org/img/w/${weather.icon}.png`}
        temp={main.temp}
        description={weather.description}
      />
     
      
        <MapContainer/>
        
     
        </div>
      <div className="weekly_wrapper" >
      <NextDay
      datetime="PZT"
      temperature={weeklyData[0].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[0].weather[0].icon}.png`}
      />
      <NextDay
      datetime="SAL"
      temperature={weeklyData[1].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[1].weather[0].icon}.png`}
      />
      <NextDay
      datetime="ÇAR"
      temperature={weeklyData[2].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[2].weather[0].icon}.png`}
      />
      <NextDay
      datetime="PER"
      temperature={weeklyData[3].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[3].weather[0].icon}.png`}
      />
      <NextDay
      datetime="CUM"
      temperature={weeklyData[4].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[4].weather[0].icon}.png`}
      />
      <NextDay
      datetime="CTS"
      temperature={weeklyData[5].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[5].weather[0].icon}.png`}
      />
      <NextDay
      datetime="PAZ"
      temperature={weeklyData[6].temp.day}
      url={`http://openweathermap.org/img/w/${weeklyData[6].weather[0].icon}.png`}
      />
      </div>
    </div>
  );
};


export default App;
