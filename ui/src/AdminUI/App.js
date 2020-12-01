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
import AddLandmark from './Components/Landmark/AddLandmark';
import LandmarkList from './Components/Landmark/LandmarkList';

import { useUserState } from '../Context/UserContext';
import EditLandmark from './Components/Landmark/EditLandmark';
import AddReceiverCategory from './Components/ReceiverCategory/AddReceiverCategory';
import ReceiverCategoryList from './Components/ReceiverCategory/ReceiverCategoryList';
import EditReceiverCategory from './Components/ReceiverCategory/EditReceiverCategory';

function App(props) {

  var { token } = useUserState();

  var content = null;
  if (props.location.pathname.startsWith("/admin/forgetpassword")) {
    content = (<Redirect to="/admin/forgetpassword" />
    )
  }

  return (
    <>

      {token == null && content==null ? <Redirect to="/admin/login" /> : null}

      <Switch>
        <Route path="/admin/addreceivercategory" exact component={AddReceiverCategory} />
        <Route path="/admin/receivercategorylist" exact component={ReceiverCategoryList} />
        <Route path="/admin/editreceivercategory/:id" exact component={EditReceiverCategory} />       
        <Route path="/admin/addlandmark" exact component={AddLandmark} />
        <Route path="/admin/landmarklist" exact component={LandmarkList} />
        <Route path="/admin/editlandmark/:id" exact component={EditLandmark} />
        <Route path="/admin/portfoliolist" exact component={PortfolioList} />
        <Route path="/admin/addportfolio" exact component={AddPortfolio} />
        <Route path="/admin/editprofile" exact component={EditProfile} />
        <Route path="/admin/volunteerlist" exact component={VolunteerList} />
        <Route path="/admin/changepassword" exact component={ChangePassword} />
        <Route path="/admin/forgetpassword" exact component={ForgetPassword} />
        <Route path="/admin/login" exact component={Login} />
        <Route path="/admin/logout" exact component={Logout} />
        <Route path="/admin/" exact component={Dashboard} />
      </Switch>
    </>
  );
}


export default withRouter(App);