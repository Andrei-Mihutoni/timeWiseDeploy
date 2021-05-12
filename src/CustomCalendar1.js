import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Paper, Grid } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import CloudIcon from "@material-ui/icons/Cloud";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import Modal from "@material-ui/core/Modal";
// import CreateShift from "../component/CreateShift";

import { connect } from "react-redux";
import { fetchShifts } from "./actions/shiftActions";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#8bc34a",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "white",
        color: "#1b5e20",
      },
    },
  },
});

export const styles = makeStyles(() => ({
  notInThisMonthDayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "#eeeeee",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
  },
  normalDayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "#e8f5e9",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
  },
  selectedDayPaper: {
    width: "31px",
    height: "31px",
    backgroundColor: "#f9fbe7",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "lime",
    padding: "1px",
    cursor: "pointer",
  },

  todayPaper: {
    width: "35px",
    height: "35px",
    backgroundColor: "lightGreen",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
    color: " white",
  },
  shiftDay: {
    width: "35px",
    height: "35px",
    backgroundColor: "lightBlue",
    margin: "3px",
    boxShadow: "none",
    borderRadius: "50%",
    padding: "1px",
    cursor: "pointer",
    textAlign: "center",
  },
}));

function CustomCalendar({ shiftData, fetchShifts }) {
  useEffect(() => {
    fetchShifts();
  }, []);
  // console.log(shiftData.shifts[0].date.substring(6, 7));
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = styles();
  const today = new Date();
  const sunnyDays = [];
  const cloudyDays = [];
  const snowyDays = [];
  const shiftDays = shiftData.shifts.map((shift) => {
    return parseInt(shift.date.substring(6, 7));
  });
  console.log(shiftDays);
  function openShift(day) {
    console.log("shift", day);
  }

  function getDayElement(day, selectedDate, isInCurrentMonth, dayComponent) {
    const isSunny = sunnyDays.includes(day.getDate());
    const isCloudy = cloudyDays.includes(day.getDate());
    const isSnow = snowyDays.includes(day.getDate());
    const isShift = shiftDays.includes(day.getDate());

    const isSelected = day.getDate() === selectedDate.getDate();
    const isToday =
      day.getDate() === today.getDate() && day.getMonth() === today.getMonth();
    // console.log(day.getTime());
    let dateTile;
    if (isInCurrentMonth) {
      if (isSunny) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                ? classes.todayPaper
                : classes.normalDayPaper
            }
          >
            <Grid item>
              <WbSunnyIcon style={{ color: "orange", width: "15px" }} />
            </Grid>
            <Grid item>{day.getDate()}</Grid>
          </Paper>
        );
      } else if (isCloudy) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                ? classes.todayPaper
                : classes.normalDayPaper
            }
          >
            <Grid item>
              <CloudIcon style={{ color: "gray", width: "15px" }} />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isSnow) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                ? classes.todayPaper
                : classes.normalDayPaper
            }
          >
            <Grid item>
              <AcUnitIcon
                style={{ color: "#3d5afe", width: "15px", marginTop: "-2px" }}
              />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isCloudy) {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                ? classes.todayPaper
                : classes.normalDayPaper
            }
          >
            <Grid item>
              <CloudIcon style={{ color: "gray", width: "15px" }} />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else if (isShift) {
        dateTile = (
          <Paper
            className={isSelected ? classes.selectedDayPaper : classes.shiftDay}
            onClick={openShift(selectedDate)}
          >
            {/* <CreateShift></CreateShift> */}
            <Grid style={{ marginTop: "15px" }} item>
              {/* <AcUnitIcon style={{ color: "#3d5afe", width: "15px" }} /> */}
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      } else {
        dateTile = (
          <Paper
            className={
              isSelected
                ? classes.selectedDayPaper
                : isToday
                ? classes.todayPaper
                : classes.normalDayPaper
            }
          >
            <Grid item>
              <br />
            </Grid>
            <Grid item> {day.getDate()}</Grid>
          </Paper>
        );
      }
    } else {
      dateTile = (
        <Paper className={classes.notInThisMonthDayPaper}>
          <Grid item>
            <br />
          </Grid>
          <Grid item style={{ color: "lightGrey" }}>
            {day.getDate()}
          </Grid>
        </Paper>
      );
    }
    return dateTile;
  }

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "80vh",
      }}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            variant="static"
            renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) =>
              getDayElement(day, selectedDate, isInCurrentMonth, dayComponent)
            }
          />
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShifts: () => dispatch(fetchShifts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCalendar);
