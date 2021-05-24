import React from "react";
import CustomCalendar1 from "../CustomCalendar1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";

function Calendar(props) {
  const currentPageName = props.location.pathname.substring(1);
  console.log(props.shiftData);
  return (
    <div className="Calendar">
      <Header currentPageName={currentPageName} />

      <Grid style={{ marginTop: "50px" }} item xs={12}>
        <div className="datesmap">
          <div className="map-wrapper">
            <div
              style={{ backgroundColor: "lightBlue" }}
              className="circle-map"
            ></div>
            <p>Existing Shifts</p>
          </div>
          <div className="map-wrapper">
            <div className="circle-map"></div>
            <p>Avilable dates</p>
          </div>
          <div className="map-wrapper">
            <div
              style={{ backgroundColor: "lightGreen" }}
              className="circle-map"
            ></div>
            <p>Selected date</p>
          </div>
        </div>
      </Grid>
      <CustomCalendar1 />
      <Grid style={{ marginTop: "100px" }} item xs={12}></Grid>
      <Footer />
    </div>
  );
}

export default Calendar;
