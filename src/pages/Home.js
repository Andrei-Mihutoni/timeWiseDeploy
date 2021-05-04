import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <nav>
        <ul>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/requests">Requests</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
