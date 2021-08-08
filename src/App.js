import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from "./Footer";
import GetLocation from "./GetLocation";
import SearchMultiple from "./SearchMultiple";
import Navbar from "./Navbar";
import Search from "./Search";
import NotFoundPage from "./NotFoundPage";

function App() {
 return (
  <Router>
   <div className="App">
    <Navbar/>
   
    <Switch>
     <Route exact path="/">
      <Search/>
     </Route>  

     <Route path="/getLocation">
      <GetLocation/>
     </Route>  

     <Route path="/searchMultiple/:lat/:lon/:nameSearched">
      <SearchMultiple/>
     </Route>  

     <Route path="*">
      <NotFoundPage/>
     </Route>
    </Switch>
     
     
    <Footer/>
   </div>
  </Router>
    
  );
}

export default App;
