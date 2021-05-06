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
import Requests from "./pages/Requests";
import { Appbar, Button, Container } from "muicss/react";

import UserList from "./containers/user-list";

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
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
