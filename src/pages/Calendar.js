import React from "react";
import CustomCalendar1 from "../CustomCalendar1";

function Calendar() {
  return (
    <div
      className="Calendar"
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      {/* <header className="App-header"> */}
      {/* <h1>TimeWise</h1> */}
      <CustomCalendar1 />
      {/* </header> */}

      {/* React router code */}
    </div>
  );
}

export default Calendar;
