import { Switch, Route, withRouter, Redirect } from 'react-router'
import { useEffect } from 'react';

import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import EditProfile from './Components/EditProfile/EditProfile';
import Logout from './Components/Logout';
import PortfolioList from './Components/Portfolio/PortfolioList';
import AddPortfolio from './Components/Portfolio/AddPortfolio';


import {useUserState} from '../Context/UserContext';
import TempClass from './TempClass';


function App(props) {

  var {token}=useUserState();
  var content = null;
  if (props.location.pathname.startsWith("/volunteer/forgetpassword")) {
    content = (<Redirect to="/volunteer/forgetpassword" />
    )
  }
 

  return (
    <>
     {token == null && content==null ? <Redirect to="/volunteer/login" /> : null}
      <Switch>
        <Route path="/volunteer/" exact component={Dashboard} />
        <Route path="/volunteer/login" exact component={Login} />
        <Route path="/volunteer/logout" exact component={Logout} />
        <Route path="/volunteer/forgetpassword" exact component={ForgetPassword} />
        <Route path="/volunteer/changepassword" exact component={ChangePassword} />
        <Route path="/volunteer/editprofile" exact component={EditProfile} />
        <Route path="/volunteer/portfoliolist" exact component={PortfolioList}/>
        <Route path="/volunteer/addportfolio" exact component={AddPortfolio} /> 

        <Route path="/volunteer/temp" exact component={TempClass} /> 
        
      </Switch>
     
    </>
  );
}


export default withRouter(App);