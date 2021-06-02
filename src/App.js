import { React, useState } from "react";
import ReactDOM from "react-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading } from "./components";
import { HomePage, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";
import LogoutButton from "../src/components/logout-button";
import CustomCalendar1 from "./CustomCalendar1";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Users from "./pages/Users";
import Addshifts from "./pages/Addshifts";
import Editshift from "./pages/Editshift";

import Confirmshift from "./pages/Confirmshift";
import Confirmeditshift from "./pages/Confirmeditshift";

import Modal1 from "./components/TransitionsModal";
import SettingPage from "./pages/SettingPage";
import Contacts from "./pages/Contacts";
import Message from "./pages/Message";
import Notifications from "./pages/Notifications";
import ShiftRequest from "./pages/ShiftRequest";
import "./App.scss";

function App(props) {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();

  // let shiftToAdd;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/calendar" component={Calendar} />
          <ProtectedRoute path="/MyProfile" component={MyProfile} />
          <ProtectedRoute path="/usersList" component={Users} />
          <ProtectedRoute path="/Settings" component={SettingPage} />
          <ProtectedRoute path="/Contacts" component={Contacts} />
          <ProtectedRoute path="/Messages" component={Message} />
          <ProtectedRoute path="/Notifications" component={Notifications} />
          <ProtectedRoute path="/ShiftRequest" component={ShiftRequest} />
          <Route path="/AddShifts">
            <Addshifts />
          </Route>
          <Route path="/EditShifts">
            <Editshift />
          </Route>
          <Route path="/ConfirmShift">
            <Confirmshift />
          </Route>
          <Route path="/Confirmeditshift">
            <Confirmeditshift />
          </Route>
          <ProtectedRoute path="/Modal1" component={Modal1} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />

          {isAuthenticated && <Redirect to="/home" from="/" />}
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
