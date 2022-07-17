import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import Profile from "./pages/Profile/Profile"
import {BrowserRouter as Router,Route, Switch,Redirect } from "react-router-dom";
// import { Redirect } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        {/* <Body> */}
          <Route exact path="/">
          {user ? <Home/> : <Register/>}
          </Route>

          <Route  path="/login">
          {user ? <Redirect to="/" /> : <Login/>}
          </Route>

          <Route  path="/register">
          {user ? <Redirect to="/" /> : <Register/>}
          </Route>

          <Route path="/profile/:username">
            <Profile/>
          </Route>

        {/* </Body> */}
      </Switch>
      
    </Router>

    
    
  );
}

export default App;
