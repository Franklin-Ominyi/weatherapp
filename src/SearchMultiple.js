import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MultipleWidget from "./MultipleWidget";

const SearchMultiple = () => {
 const {lat, lon, nameSearched}  = useParams();
 const [data, setData] = useState(null);
 const [isLoading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 
 let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,current,hourly&units=metric&APPID=`;
 
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
   if(err.name !== "AbortError"){
    setLoading(false)
    setError(err.message);
   }
  }) 

  return ()=> abortCont.abort()
 
 }, [url])

 return (
  <div className="search-multiple">
   {isLoading && <div className="loading"><p>Loading....</p></div>}
   {error && <div className="error"><p>{error}</p></div>}
   {data && !error && !isLoading  && <MultipleWidget nameSearched={nameSearched} data={data}/>}
  </div>
 );
}
 
export default SearchMultiple;
