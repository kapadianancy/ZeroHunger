import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import ForgetPassword from './Components/ChangePassword/ChangePassword';
import EditProfile from './Components/EditProfile/EditProfile';


function App() {
  var path="assets/images/about_layout.png";
  var style ={
    backgroundImage: "url(" + path + ")",
    height:"100%",
    backgroundPosition: 'center',
    //backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <>
      {/* <div style={style}>
        <Login />
      </div> */}


      <Header />
      
      <div class="page-content" style={{height:"100%"}} >
      <Sidebar />
        {/* <Dashboard /> */}
        {/* <ForgetPassword/> */}
        <EditProfile/>
      </div>

    </>
  );
}

export default App;