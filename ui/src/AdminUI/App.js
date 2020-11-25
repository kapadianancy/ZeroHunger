import { Switch, Route, withRouter, Redirect } from 'react-router'

import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import VolunteerList from "./Components/Volunteer/VolunteerList";

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/admin/volunteerlist" exact component={VolunteerList} />
        <Route path="/admin/changepassword" exact component={ChangePassword} />
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/forgetpassword" exact component={ForgetPassword} />
        <Route path="/admin/" exact component={Dashboard} />
      </Switch>
    </>
  );
}


export default withRouter(App);