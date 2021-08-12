import { useState, useEffect } from "react";
import Widget from "./Widget";
const GetLocation = () => {
 const [lat,setLat] =  useState();
 const [lon,setLon] =  useState();
 
 const [error,setError] =  useState();
 const [data, setData] = useState(null);
 const [isLoading, setLoading] = useState(true);

 
 function getLocation() {
  if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   setError("Geolocation is not supported by this browser.");
  }
 }

 getLocation();

 function showPosition(position) {
  setLat(position.coords.latitude)
  setLon(position.coords.longitude)	
 }
 
 let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=`;
 
 useEffect(()=>{
  const abortCont = new AbortController();

  fetch(url, {signal: abortCont.signal})
  .then(res=>{
   if(!res.ok){
    throw Error("Cound not find the requested data")
   }
   return res.json()
  })
  .then(data=>{
   setData(data)
   setLoading(false)
   setError(null)
  })
  .catch(err=>{
   if(err.name === "AbortError"){
    console.log('fetch aborted')
   }else{
    setLoading(false)
    setError(err.message);
   }
  }) 
  return ()=> abortCont.abort();
 }, [url])



 return (
  <div className="get-location">
   {error && !isLoading && <div className="error">{error}</div>}
   {isLoading && !error && <div className="loading">Loading...</div>}
   {data && <Widget data={data}/>}
  </div>
 );
}
 
export default GetLocation;
