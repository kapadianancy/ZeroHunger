import { Switch, Route, withRouter, Redirect } from 'react-router'

import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import VolunteerList from "./Components/Volunteer/VolunteerList";
import EditProfile from './Components/EditProfile/EditProfile';
import AddPortfolio from './Components/Portfolio/AddPortfolio';
import PortfolioList from './Components/Portfolio/PortfolioList';

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/admin/portfoliolist" exact component={PortfolioList}/>
        <Route path="/admin/addportfolio" exact component={AddPortfolio} /> 
        <Route path="/admin/editprofile" exact component={EditProfile} />
        <Route path="/admin/volunteerlist" exact component={VolunteerList} />
        <Route path="/admin/changepassword" exact component={ChangePassword} />
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/logout" exact component={Logout} />
        <Route path="/admin/forgetpassword" exact component={ForgetPassword} />
        <Route path="/admin/" exact component={Dashboard} />
      </Switch>
    </>
  );
}


export default withRouter(App);