import { Link } from "react-router-dom";
const Navbar = () => {
 return ( 
  <div className="navbar">
   <h1>Weather App</h1>
   <ul>
    <Link className="desktop" to="/">Home</Link>
    <Link className="desktop" to='/getLocation'>Get Your Location Weather</Link>
    <Link className="mobile" to="/"><i className='fa fa-home'></i></Link>
    <Link className="mobile" to="/getLocation"><i className='fas fa-location-arrow'></i></Link>
   </ul>
  </div>
 );
}
 
export default Navbar;