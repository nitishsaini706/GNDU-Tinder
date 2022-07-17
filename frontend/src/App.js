import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Profile from "./pages/Profile/Profile"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  

} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/">
    //       <Home/>
    //     </Route>

    //     <Route exact path="/login">
    //       <Login/>
    //     </Route>

    //     <Route exact path="/register">
    //       <Register/>
    //     </Route>

    //     <Route exact path="/profile/:username">
    //       <Profile/>
    //     </Route>
    //   </Routes>
      
    // </Router>

    <Home/>
    
  );
}

export default App;
