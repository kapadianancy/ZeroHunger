import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import { Switch, Route, withRouter, Redirect } from 'react-router'

function App(props) {
  return (
    <>
      <Switch>
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/forgetpassword" exact component={ForgetPassword} />
        <Route path="/admin/" exact component={Dashboard} />
      </Switch>
    </>
  );
}


export default withRouter(App);