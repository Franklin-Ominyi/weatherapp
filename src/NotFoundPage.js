import { Link }  from "react-router-dom";
const NotFoundPage = () => {

 return (
  <div>
   <h1 style={{"marginBottom": "10px"}}>Page Not Found</h1>
   <Link to="/">Go back to homepage</Link>
  </div>
 );
}
 
export default NotFoundPage;