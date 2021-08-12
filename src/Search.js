import {useState} from "react"
import Home from "./Home";
import Widget from "./Widget";

const Search = () => {
 const [input,setInput] = useState('');
 const [data, setData] = useState(null);
 const [isLoading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 
 const getData=(e)=>{
  e.preventDefault();
  setLoading(true);
  setError(false)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&APPID=`)
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
    
 }
 
 return ( 
  <div>
   <div className="search">
    <form onSubmit={getData}>
     <input
      type="search" 
      placeholder="Enter City Name"
      value={input}
      required
      onChange={e=> setInput(e.target.value) }
     />
     <button>Get Weather</button>
    </form>
   </div>
   
   {isLoading && <div className="loading"><p>Loading....</p></div>}
   {!data && error &&  <div className="error"><p>{error}</p></div>}
   {!data && !error && !isLoading && <Home/>}
   {!error && data && !isLoading  && <Widget data={data}/>}
  </div>   
 );
}
 
export default Search;
