import React, { useEffect, useState } from "react";
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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import {
  postShift,
  updateShiftToAdd,
  updateShiftTime,
  updateShiftLocation,
} from "../actions/shiftActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  insideGrid: {
    padding: "20px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Confirmshift({
  shiftData,
  postShift,
  updateShiftToAdd,
  updateShiftTime,
  updateShiftLocation,
}) {
  const currentPageName = "Confirm Shift ";
  const classes = useStyles();
  const [shiftLocation, setshiftLocation] = useState("");
  const [shiftTime, setShiftTime] = useState("");
  const [open, setOpen] = React.useState(false);
  const [person, setPerson] = React.useState("");
  const newShift = {
    day: shiftData.shiftToAdd.day,
    shiftTime: shiftTime,
    shiftLocation: shiftLocation,
    worker: person,
  };
  const handlePersonChange = (event) => {
    setPerson(event.target.value);
    console.log(person);
    console.log(newShift);
    updateShiftToAdd(newShift);
    console.log(shiftData.shiftToAdd);
  };

  function submitShift() {
    postShift(shiftData.shiftToAdd);
  }

  const handleOpen = () => {
    submitShift();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTimeChange = (event) => {
    setShiftTime(event.target.value);
    console.log(shiftTime);
    updateShiftTime(event.target.value);
    updateShiftToAdd(newShift);
    console.log(shiftData.shiftToAdd);
  };
  const handleLocationChange = (event) => {
    setshiftLocation(event.target.value);
    console.log(event.target.value, "in addhift");
    updateShiftLocation(event.target.value);
    updateShiftToAdd(newShift);
    console.log(shiftData.shiftToAdd);
  };
  return (
    <div>
      <CssBaseline />
      <Header currentPageName={currentPageName} />

      <div className={classes.root} style={{ marginBottom: "100px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2 className={(classes.paper, "marginTopHome1")}>
                Confirm shift
              </h2>
            </Grid>

            {/* <Grid item xs={12}>
              <h2 className="marginTopHome2">Shift details</h2>
            </Grid>
            <Grid item xs={12}>
              <p className="marginTopHome2">
                Check the shift details and confirm the new shift
              </p>
            </Grid> */}

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs={12}>
              <p className="marginTopHome2">
                Choose a location, Date and time to add the shift
              </p>
            </Grid>

            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-Location">Location</InputLabel>
                <Select
                  labelId="select-Location"
                  id="select-Location"
                  value={shiftLocation}
                  onChange={handleLocationChange}
                  required
                >
                  {/* <MenuItem value="location">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={"Amager"}>Amager</MenuItem>
                  <MenuItem value={"Østerbro"}>Østerbro</MenuItem>
                  <MenuItem value={"Valby"}>Valby</MenuItem>
                  <MenuItem value={"Frederiksberg"}>Frederiksberg</MenuItem>
                </Select>
                <FormHelperText>Choose The Location</FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-Time">Time</InputLabel>
                <Select
                  labelId="select-Time"
                  id="select-Time"
                  value={shiftTime}
                  onChange={handleTimeChange}
                  required
                >
                  {/* <MenuItem value="time">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value={"10:00 - 15:00"}>10:00 - 15:00</MenuItem>
                  <MenuItem value={"14:00 - 19:00"}>14:00 - 19:00</MenuItem>
                </Select>
                <FormHelperText>Choose The Time</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-Person">Personal</InputLabel>
                <Select
                  labelId="select-Person"
                  id="select-Person"
                  value={person}
                  onChange={handlePersonChange}
                >
                  <MenuItem value="person">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Daniel"}>Daniel</MenuItem>
                  <MenuItem value={"Andrie"}>Andrie</MenuItem>
                  <MenuItem value={"Laufey"}>Laufey</MenuItem>
                </Select>
                <FormHelperText>Chose The Personal</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <h2>{shiftData.shiftToAdd.day.toString().substr(0, 10)}</h2>
            </Grid>

            <Container maxWidth="lg" style={{ marginTop: "-20px" }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <h3>Company :</h3>
                </Grid>
                <Grid item xs={6} style={{ margin: "20px 0px 10px" }}>
                  <p style={{ marginLeft: "45px", textAlign: "left" }}>
                    Ny Liv Spa
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h3
                    style={{
                      marginTop: "-20px",
                      marginLeft: "-10px",
                    }}
                  >
                    Date :
                  </h3>
                </Grid>
                <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                  <p
                    style={{
                      marginTop: "-20px",
                      marginLeft: "45px",
                      textAlign: "left",
                    }}
                  >
                    {shiftData.shiftToAdd.day.toString().substring(0, 16)}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h3 style={{ marginTop: "-20px", marginLeft: "-10px" }}>
                    Location :
                  </h3>
                </Grid>
                <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                  <p
                    style={{
                      marginTop: "-20px",
                      marginLeft: "45px",
                      textAlign: "left",
                    }}
                  >
                    {shiftLocation}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h3 style={{ marginTop: "-20px", marginLeft: "-45px" }}>
                    Time:
                  </h3>
                </Grid>
                <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                  <p
                    style={{
                      marginTop: "-20px",
                      marginLeft: "45px",
                      textAlign: "left",
                    }}
                  >
                    {shiftTime}
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <h3 style={{ marginTop: "-20px", marginLeft: "-45px" }}>
                    Worker:
                  </h3>
                </Grid>
                <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                  <p
                    style={{
                      marginTop: "-20px",
                      marginLeft: "45px",
                      textAlign: "left",
                    }}
                  >
                    {person}
                  </p>
                </Grid>
              </Grid>
            </Container>
            <Grid item xs={6} style={{ marginTop: "20px" }}>
              <Link to="/addshifts">
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
            <Grid item xs={6} style={{ marginTop: "20px" }}>
              <Button
                onClick={handleOpen}
                variant="contained"
                style={{
                  backgroundColor: "#03DAC5",
                  color: "white",
                  borderRadius: "28px",
                  width: "100px",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paperModal}>
              <h2 id="transition-modal-title">Shift created</h2>
              <p id="transition-modal-description">
                The following shift has been created and added to the calendar
              </p>
              <Container maxWidth="sm" style={{ marginTop: "-20px" }}>
                <Grid container spacing={3} className={classes.insideGrid}>
                  <Grid item xs={6}>
                    <h3 style={{ marginLeft: "-5px", textAlign: "left" }}>
                      Company :
                    </h3>
                  </Grid>
                  <Grid item xs={6} style={{ margin: "20px 0px 10px" }}>
                    <p style={{ marginLeft: "-5px", textAlign: "left" }}>
                      Ny Liv Spa
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <h3
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      Location :
                    </h3>
                  </Grid>
                  <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                    <p
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      {shiftData.shiftToAdd.shiftLocation.toString()}
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <h3
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      Date:
                    </h3>
                  </Grid>
                  <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                    <p
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      {shiftData.shiftToAdd.day.toString().substr(0, 10)}
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <h3
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      Time:
                    </h3>
                  </Grid>
                  <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                    <p
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      {shiftData.shiftToAdd.shiftTime.toString()}
                    </p>
                  </Grid>
                  <Grid item xs={6}>
                    <h3
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      Employee
                    </h3>
                  </Grid>
                  <Grid item xs={6} style={{ margin: "0px 0px 10px" }}>
                    <p
                      style={{
                        marginTop: "-20px",
                        marginLeft: "-5px",
                        textAlign: "left",
                      }}
                    >
                      {person}
                    </p>
                  </Grid>
                </Grid>
              </Container>
              <Link to="/home">
                <Button
                  onClick={handleClose}
                  variant="contained"
                  style={{
                    backgroundColor: "#03DAC5",
                    color: "white",
                    borderRadius: "28px",
                    width: "100px",
                  }}
                >
                  Ok
                </Button>
              </Link>
            </div>
          </Fade>
        </Modal>
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

const mapDispatchToProps = (dispatch) => {
  return {
    postShift: (newShift) => dispatch(postShift(newShift)),
    updateShiftToAdd: (worker) => dispatch(updateShiftToAdd(worker)),
    updateShiftTime: (shiftTime) => dispatch(updateShiftTime(shiftTime)),
    updateShiftLocation: (shiftLocation) =>
      dispatch(updateShiftLocation(shiftLocation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmshift);
