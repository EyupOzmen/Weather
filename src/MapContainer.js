import React,{useState,useEffect,useContext} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {WeatherContext} from './context/WeatherContext'



const MapContainer = () => {
  const{setLocation}=useContext(WeatherContext)

  const[curentPosition,setCurrentPosition]=useState({})
  

  const success = position => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
    setLocation(curentPosition)
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
    setLocation({cLat:lat,cLong:lng})
  };

  const mapStyles = {        
    height: "100%",
    width: '70%',
    width:300,
    marginBottom:20,
    marginTop:20
  }
  
  
  
  return (
   
     <LoadScript 
       googleMapsApiKey='AIzaSyBFECPviev-KAQ3NsfoJjao_dpMID8icFs'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={curentPosition}
        >
        {
          curentPosition.lat ?
          <Marker
          position={curentPosition}
          onDragEnd={(e) => onMarkerDragEnd(e)}
          draggable={true}
          />:null
        }
        </GoogleMap>  
     </LoadScript>
     
  )
}

export default MapContainer

