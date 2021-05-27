import React from "react";
import CustomCalendar1 from "../CustomCalendar1";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

function Calendar(props) {
  const currentPageName = props.location.pathname.substring(1);
  console.log(props.shiftData);
  return (
    <div className="CALENDAR">
      <Header currentPageName={currentPageName} />
    <Container>
      <Grid style={{ marginTop: "50px" }} item xs={12}>
        <Grid item xs={12}>
              <h2 className="marginTopHome1">
                {currentPageName}
              </h2>
              <Divider style={{marginTop:'10px'}} variant="middle" />
            </Grid>
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
      </Container>
      <CustomCalendar1 />

      <Footer />
    </div>
  );
}

export default Calendar;
