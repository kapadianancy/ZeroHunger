
import {Route,Switch} from 'react-router-dom';

import Admin from './AdminUI/App'
import Volunteer from './VolunteerUI/App';
import Error from './Error';


function App() {

  return (
   <>
  
   <Switch>
     <Route path ="/admin" component = {Admin}/>
     <Route path="/volunteer" component={Volunteer}/>
     <Route path="/*" component={Error}/>
   </Switch>
   </>
  );
}

export default App;
