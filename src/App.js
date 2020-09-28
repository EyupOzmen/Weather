import React,{useEffect,useState} from 'react';
import axios from 'axios';

import WeatherData from './components/WeatherData'

const App = ()  => {
  const [data,setData]=useState([])

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
      console.log(request.data)
      setData(request.data)
      return request.data
    }
    fetchData()
  },[])

  
  return (
    <div className="App">
      <WeatherData 
        city_name={data.city_name}
      />
    </div>
  );
}

export default App;
