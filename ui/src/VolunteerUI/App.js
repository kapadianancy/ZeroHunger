import { Switch, Route, withRouter, Redirect } from 'react-router'

import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import EditProfile from './Components/EditProfile/EditProfile';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';


function App(props) {
  return (
    <>
    

      <Switch>
        <Route path="/volunteer/" exact component={Dashboard} />
        <Route path="/volunteer/login" exact component={Login} />
        <Route path="/volunteer/forgetpassword" exact component={ForgetPassword} />
        <Route path="/volunteer/changepassword" exact component={ChangePassword} />
        <Route path="/volunteer/editprofile" exact component={EditProfile} />
        
      </Switch>
     
    </>
  );
}


export default withRouter(App);