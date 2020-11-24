import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Admin from './AdminUI/App'
import Volunteer from './VolunteerUI/App';

function App() {

  return (
   <>
  
   <Switch>
     <Route path="/admin" component={Admin}/>
     <Route path="/volunteer" component={Volunteer}/>
   </Switch>
   </>
  );
}

export default App;
