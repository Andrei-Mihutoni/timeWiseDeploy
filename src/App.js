import React from "react";
import ReactDOM from "react-dom";

import { NavBar, Footer, Loading } from "./components";
import { HomePage, Profile, ExternalApi } from "./views";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

import CustomCalendar1 from "./CustomCalendar1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Users from "./pages/Users";
import { Appbar, Button, Container } from "muicss/react";


import "./App.scss";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <NavBar />
        <div className="container flex-grow-1">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/" exact component={Calendar} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
        <div>
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
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
