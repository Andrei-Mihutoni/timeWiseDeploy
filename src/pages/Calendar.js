import React from "react";
import CustomCalendar1 from "../CustomCalendar1";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Calendar(props) {
  const currentPageName = props.location.pathname.substring(1);
  console.log(props.shiftData);
  return (
    <div
      className="Calendar"
    >
      <Header currentPageName={currentPageName}/>
      <CustomCalendar1 />
      <Footer />
    </div>
  );
}

export default Calendar;
