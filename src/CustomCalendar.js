// Customize Material-UI Datepicker With React from https://www.fcodelabs.com/2021/01/12/React-Material-Date-Picker/

import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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
    MuiPickersYearSelection: {
      backgroundColor: "black",
    },
  },
});
export default function CustomCalendar() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            variant="static"
          ></DatePicker>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}
