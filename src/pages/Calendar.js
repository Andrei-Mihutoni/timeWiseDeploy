import React from "react";
import CustomCalendar1 from "../CustomCalendar1";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Calendar({ shiftData }) {
  console.log(shiftData);
  return (
    <div
      className="Calendar"
      style={
        {
          // display: "grid",
          // placeItems: "center",
          // height: "70vh",
        }
      }
    >
      <Header />
      <CustomCalendar1 />
      <Footer />
    </div>
  );
}

export default Calendar;
