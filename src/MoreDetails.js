const MoreDetails = (props) => {
 const {item,timezone_offset} = props;
 
 const direction=(direction)=>{
  if(direction <= 45){
   return  "NN"
  }else if(direction <= 90){
   return "NE"
  }else if(direction <= 135){
   return "SE"
  }else if(direction <= 225){
   return "SS"
  }else if(direction <= 270){
   return   "SW"
  }else if(direction <= 315){
   return "NW"
  }else if(direction <= 360){
   return "NN"
  }
 }

 const convertTimestamp=(data,timezone)=>{
  const timestamp = data;
  const milliseconds = (1000 * timestamp) + (3600000 * (timezone/3600));
  const d = new Date(milliseconds);
  const minutes = d.getUTCMinutes();
  const hour = d.getUTCHours();
  const amPm = hour >= 12 ? "pm": "am";
  const hourDOM = hour % 12 || 12
  const addZero=(e)=>{
   return (parseInt(e) < 10 ? "0":"") + e;
  }
  return `${addZero(hourDOM)}:${addZero(minutes)}${amPm}`
 }

 const formatDate=(data,timezone)=>{
  const timestamp = data;
  const milliseconds = (1000 * timestamp) + (3600000 * (timezone/3600));
  const d = new Date(milliseconds);
  
 
  let date;
  let month;
  let day;
  
  
  switch (d.getUTCDay()) {
   case 0:
    day = "Sunday";
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
    month = "January";
    break;
   case 1:
    month = "February";
    break;
   case 2:
    month = "March";
    break;
   case 3:
    month = "April";
    break;
   case 4:
    month = "May";
    break;
   case 5:
    month = "June";
    break;
   case 6:
    month = "July";
    break;
   case 7:
    month = "August";
    break;
   case 8:
    month = "September";
    break;
   case 9:
    month = "October";
    break;
   case 10:
    month = "November";
    break;
   case 11:
    month = "December";
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


 
 return (
  <div className="more-details">
   <div className="more-details-container" key={item.dt}>
    <div className="more-details-top">
     <p>{formatDate(item.dt,timezone_offset)}</p> 
     <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather_img"/>
     <p>{item.weather[0].description}</p>
    </div>
 
    <div className="more-details-content">
     <span>The high will be {Math.round(item.temp.max)}&#176;C, the low will be {Math.round(item.temp.min)}&#176;C</span>
    </div>

    <div className="more-details-content">
     <span>Sunrise: {convertTimestamp(item.sunrise, timezone_offset)} Sunset: {convertTimestamp(item.sunset, timezone_offset)}</span>
    </div>

    <div className="more-details-content">
     <span>Humidity: {item.humidity}%</span> 
     <span>UV index: {Math.round(item.uvi)}</span>
     <span>Dew Point:  {Math.round(item.dew_point)}&#176;C</span>
    </div>

    <div className="more-details-content">
      {item.rain  && <span>Rain: {item.rain}mm ({Math.round(item.pop * 100)}%)</span>} {!item.rain && <span>Raining Probability: {item.pop * 100}%</span>}
     <span>Wind speed:  {item.wind_speed}m/s {direction(item.wind_deg)}</span>
     <span>Pressure:  {item.pressure}hPa</span>
    </div>

    <div className="more-details-content">
     <table>
      <tbody>
       <tr>
        <td></td>
        <td>Morn</td>		
        <td>After</td>
        <td>Eve</td>
        <td>Night</td>
       </tr>
       <tr>
        <td>TEMPERATURE</td>
        <td>{Math.round(item.temp.morn)}&#176;C</td>		
        <td>{Math.round(item.temp.day)}&#176;C</td>
        <td>{Math.round(item.temp.eve)}&#176;C</td>
        <td>{Math.round(item.temp.night)}&#176;C</td>
       </tr>
       <tr>
        <td>FEELS LIKE</td>
        <td>{Math.round(item.feels_like.morn)}&#176;C</td>		
        <td>{Math.round(item.feels_like.day)}&#176;C</td>
        <td>{Math.round(item.feels_like.eve)}&#176;C</td>
        <td>{Math.round(item.feels_like.night)}&#176;C</td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>


  </div>
 );
}
 
export default MoreDetails;