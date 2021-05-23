import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCalendar from "../CustomCalendar1";
import { CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { updateShiftTime, updateShiftLocation } from "../actions/shiftActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Addshifts({ shiftData, updateShiftTime, updateShiftLocation }) {
  const classes = useStyles();

  const currentPageName = "Add Shift";

  return (
    <div>
      <CssBaseline />
      <Header currentPageName={currentPageName} />

      <div className={classes.root} style={{ marginBottom: "100px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>

            <Grid item xs={12}>
              <h2 className="choosedate">Choose an avilable date</h2>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ marginTop: "-50px", marginBottom: "-50px" }}
            >
              <Grid item xs={12}>
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
              <CustomCalendar
              // shiftSelectedDetails={{ shiftLocation, shiftTime }}
              />
            </Grid>

            <Grid item xs={6} style={{ marginTop: "50px" }}>
              <Link to="/home">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#E5E5E5",
                    color: "black",
                    borderRadius: "28px",
                    width: "100px",
                  }}
                >
                  Back
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} style={{ marginTop: "50px" }}>
              <Link to="/Confirmshift">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#03DAC5",
                    color: "white",
                    borderRadius: "28px",
                    width: "100px",
                  }}
                >
                  Next
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

export default connect(mapStateToProps)(Addshifts);
