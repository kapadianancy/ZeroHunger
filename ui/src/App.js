import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Admin from './AdminUI/App'

function App() {

  return (
   <>
  
   <Switch>
     <Route path="/admin" component={Admin}/>
   </Switch>
   </>
  );
}

export default App;
