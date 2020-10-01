import React,{createContext,useState} from 'react';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
    const [location,setLocation]=useState({
        cLat:41.015137,
        cLong:28.97953
    })

    return (
        <WeatherContext.Provider value={{location,setLocation}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider