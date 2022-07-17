import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/login"
import Profile from "./pages/Profile/Profile"
import {
  Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
