import React from "react";
import CustomCalendar from "./CustomCalendar";
import "./App.css";

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
      <header className="App-header">
        <h1>TimeWise</h1>
        <CustomCalendar />
      </header>
    </div>
  );
}

export default App;
