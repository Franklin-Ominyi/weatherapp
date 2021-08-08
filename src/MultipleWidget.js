import {useState} from "react";
import MoreDetails from "./MoreDetails";
const MultipleWidget = (props) => {
 const {data, nameSearched} = props;

 const formatDate=(data,timezone)=>{
  const timestamp = data;
  const milliseconds = (1000 * timestamp) + (3600000 * (timezone/3600));
  const d = new Date(milliseconds);
  
 
  let date;
  let month;
  let day;
  
  
  switch (d.getUTCDay()) {
   case 0:
    day = "Sun";
    break;
   case 1:
    day = "Mon";
    break;
   case 2:
    day = "Tue";
    break;
   case 3:
    day = "Wed";
    break;
   case 4:
    day = "Thur";
    break;
   case 5:
    day = "Fri";
    break;
   case 6:
    day = "Sat";
    break;
   default:
    day = '';
    break;
  }

  switch (d.getUTCMonth()) {
   case 0:
    month = "Jan";
    break;
   case 1:
    month = "Feb";
    break;
   case 2:
    month = "Mar";
    break;
   case 3:
    month = "Apr";
    break;
   case 4:
    month = "May";
    break;
   case 5:
    month = "Jun";
    break;
   case 6:
    month = "Jul";
    break;
   case 7:
    month = "Aug";
    break;
   case 8:
    month = "Sep";
    break;
   case 9:
    month = "Oct";
    break;
   case 10:
    month = "Nov";
    break;
   case 11:
    month = "Dec";
    break;
   default:
    month = '';
    break;
  }



  if(d.getUTCDate() === 1 || d.getUTCDate() === 31 || d.getUTCDate() === 21){
   date = d.getUTCDate() + "st";
  }else if(d.getUTCDate() === 2 || d.getUTCDate() === 22){
   date = d.getUTCDate() + "nd"
  }else if(d.getUTCDate() === 3 || d.getUTCDate() === 23){
   date = d.getUTCDate() + "rd"
  }else{
   date = d.getUTCDate() + "th";
  }

  
  return `${day} ${date} ${month}`
 }

 const [isShowing,setIsShowing] = useState([false,false,false,false,false,false,false,false]);
 const toggleShow=(index)=>{
  setIsShowing(
   isShowing.map((it,j)=>{
    if(j === index){
     return !it;
    }else{
     return it;
    }
   })
  )
  
 }

 

 return (
  <div className="multiple-widget">
   <h2 style={{"marginBottom": "5px"}}>{nameSearched}</h2>
   <h2 style={{"marginBottom": "10px"}}>8 Days Forecast</h2>
   
   
  {data.daily.map((item,index) => (
   <div className="list-container" key={item.dt}>
    <div  onClick={()=> toggleShow(index)} className="list-multiple" >
     <span>{formatDate(item.dt,data.timezone_offset)}</span>
     <div> 
      <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="img"/>
      <span>{Math.round(item.temp.max)}/ {Math.round(item.temp.min)}&#176;C</span>
     </div>
     <div>
      <span style={{"marginRight": "6px"}}>{item.weather[0].description}</span>
      {isShowing[index] && <i className='far fa-arrow-alt-circle-up'></i>}
      {!isShowing[index] && <i className='far fa-arrow-alt-circle-down'></i>}
     </div>
    </div>
    {isShowing[index] && <MoreDetails item={data.daily[index]} timezone_offset={data.timezone_offset}/>}
   </div>
 
    ))}
  
   
  </div>
 )
}
export default MultipleWidget;