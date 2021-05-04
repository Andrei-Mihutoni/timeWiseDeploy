import React from "react";
import ReactDOM from "react-dom";

import CustomCalendar1 from "./CustomCalendar1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import { Appbar, Button, Container } from "muicss/react";

import "./App.scss";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Router>
        <div>
          <Appbar></Appbar>
          <Button>hahah</Button>
          <Button color="primary">button</Button>

          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/requests">
              <Requests />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
