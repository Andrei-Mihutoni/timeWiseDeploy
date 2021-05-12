import React from "react";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { HomePage, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import LogoutButton from '../src/components/logout-button'
import CustomCalendar1 from "./CustomCalendar1";
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Users from "./pages/Users";
import { Appbar, Button, Container } from "muicss/react";

import "./App.scss";


function App() {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="container flex-grow-1">
        {/* <Switch> */}
       
        {/* </Switch> */}
      </div>
      {/* <Appbar>
            <nav>
            <ul>
            <li>
            <Link to="/Home">Home</Link>
            </li>
            </ul>
            </nav>
            
          </Appbar> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Router>
        <Switch>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Locations">
            <Locations />
          </Route>
          <Route path="/usersList">
            <Users />
          </Route>
          
          {isAuthenticated && <Redirect to="/home" from='/'/>}
           <Route path="/" exact component={HomePage}/>
       
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
