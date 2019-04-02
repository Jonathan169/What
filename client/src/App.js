import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Promos from "./pages/Promos";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import './App.css';
import Nav from "./components/NavBar";
import Login from "./components/Jons/login";
import Signup from "./components/Jons/signup"

function App() {

  return (
    <Router>

      <div>

        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/promos" component={Promos} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );



}
export default App;