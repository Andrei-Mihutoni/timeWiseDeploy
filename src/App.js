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
import Confirmshift from "./pages/Confirmshift";
import Modal1 from "./components/TransitionsModal";
import SettingPage from "./pages/SettingPage";
import Contacts from "./pages/Contacts";
import "./App.scss";

function App(props) {
  const { isAuthenticated } = useAuth0();
  const { isLoading } = useAuth0();
  const [shiftToAdd, setShiftToAdd] = useState({});

  // let shiftToAdd;
  if (isLoading) {
    return <Loading />;
  }

  function getShiftDetails(shift) {
    console.log(shift, "shift in app");
    // shiftToAdd=shift;
    const nextShift = { ...shift };
    // setShiftToAdd(nextShift);
  }
  return (
    <div>
      {/* <ThemeProvider theme={lightTheme}> */}
      {/* <GlobalStyles /> */}
      {/* <button>Toggle theme</button> */}
      {/* <h1>It's a light theme!</h1> */}
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
      {/* <ShiftList></ShiftList> */}
      <Router>
        <Switch>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/calendar" component={Calendar} />
          <ProtectedRoute path="/MyProfile" component={MyProfile} />
          <ProtectedRoute path="/usersList" component={Users} />
           <ProtectedRoute path="/Settings" component={SettingPage} />
           <ProtectedRoute path="/Contacts" component={Contacts} />
          <Route path="/AddShifts">
            <Addshifts getShiftDetails={getShiftDetails} />
          </Route>
          <Route path="/ConfirmShift">
            <Confirmshift shiftToAdd={shiftToAdd} />
          </Route>
          {/* <ProtectedRoute path="/ConfirmShift" component={Confirmshift} /> */}
          <ProtectedRoute path="/Modal1" component={Modal1} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />

          {isAuthenticated && <Redirect to="/home" from="/" />}
          <Route path="/" exact component={HomePage} />

          {/* <Route path="/calendar">
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

          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />

          {isAuthenticated && <Redirect to="/home" from='/' />}
          <Route path="/" exact component={HomePage} /> */}
        </Switch>
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
