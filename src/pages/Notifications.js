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
import Hidden from '@material-ui/core/Hidden'; 



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
  formControl: {
    margin: theme.spacing(0),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  spanNumber:{
    //   border: '1px solid black',
    //   borderRadius: '50%',
  },
  view:{
        color: '#009BCC',
        cursor:'pointer',
  }
}));

function Notifications() {
  const currentPageName = "Notifications ";
  const classes = useStyles();
  const [shiftLocation, setshiftLocation] = useState("");
  const [shiftRequest, setShiftRequest] = useState("");
  const [person, setPerson] = React.useState("");
 
  const handlePersonChange = (event) => {
    setPerson(event.target.value);
  };

  const handleRequest = (event) => {
    setShiftRequest(event.target.value);

  };
  const handleLocationChange = (event) => {
    setshiftLocation(event.target.value);
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
                Shift Requests 
              </h2>
            </Grid>

            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
             
            <Grid item xs={12}>
              <p style={{color:'#009BCC', textAlign:'left',marginTop:'15px'}}>
                Filter By:
              </p>
            </Grid>
            </Grid>

            <Grid container spacing={0} style={{marginTop:'-12px'}}>

                <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-Request">Requests</InputLabel>
                <Select
                  labelId="select-Request"
                  id="select-Request"
                  value={shiftRequest}
                  onChange={handleRequest}
                  required
                >
                  <MenuItem value={"Work Req"}>Work Req</MenuItem>
                  <MenuItem value={"Switch Req"}>Switch Req</MenuItem>
                  <MenuItem value={"Quit Req"}>Quit Req</MenuItem>
                </Select>
                 <Hidden only={'xs'}>
                <FormHelperText>Requests</FormHelperText>
                </Hidden>
              </FormControl>
                </Grid>

             <Grid item xs={4}>
              <FormControl className={classes.formControl}>
                <InputLabel id="select-Person">Staffs</InputLabel>
                <Select
                  labelId="select-Person"
                  id="select-Person"
                  value={person}
                  onChange={handlePersonChange}
                >
                 
                  <MenuItem value={"Daniel"}>Daniel</MenuItem>
                  <MenuItem value={"Andrie"}>Andrie</MenuItem>
                  <MenuItem value={"Laufey"}>Laufey</MenuItem>
                </Select>
                  <Hidden only={'xs'}>
                <FormHelperText>Staff</FormHelperText>
                </Hidden>
              </FormControl>
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
                  <MenuItem value={"Amager"}>Amager</MenuItem>
                  <MenuItem value={"Østerbro"}>Østerbro</MenuItem>
                  <MenuItem value={"Valby"}>Valby</MenuItem>
                  <MenuItem value={"Frederiksberg"}>Frederiksberg</MenuItem>
                </Select>
                <Hidden only={'xs'}>
                <FormHelperText>Location</FormHelperText>
                </Hidden>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Divider style={{marginTop:'50px'}} variant="middle" />
            </Grid>

            <Grid item xs={12}>
              <h3 style={{textAlign:'left',marginTop:'25px'}}>Requests: </h3>
            </Grid>

            <Grid container spacing={2}>
            <Grid item xs={6}>
              <p className=''>  
                Work requests by Daniel
              </p>
            </Grid>
            
            <Grid item xs={3}>
              <p className=''> <span className={classes.spanNumber}>12 </span>
                June 2021
              </p>
            </Grid>
             <Grid item xs={3}>
              <p className={classes.view} >
                view
              </p>
            </Grid>
             <Grid item xs={12}>
              <Divider style={{marginTop:'-10px'}} variant="middle" />
            </Grid>

             <Grid item xs={6}>
              <p className=''>  
                Shift cancellation request by Andrei
              </p>
            </Grid>
            
            <Grid item xs={3}>
              <p className=''> <span className={classes.spanNumber}>25 </span>
                July 2021
              </p>
            </Grid>
             <Grid item xs={3}>
              <p className={classes.view} >
                view
              </p>
            </Grid>
             <Grid item xs={12}>
              <Divider style={{marginTop:'-10px'}} variant="middle" />
            </Grid>

             <Grid item xs={6}>
              <p className=''>  
                Swapp request by Laufey
              </p>
            </Grid>
            
            <Grid item xs={3}>
              <p className=''> <span className={classes.spanNumber}>14 </span>
                June 2021
              </p>
            </Grid>
             <Grid item xs={3}>
              <p className={classes.view} >
                view
              </p>
            </Grid>
             <Grid item xs={12}>
              <Divider style={{marginTop:'-10px'}} variant="middle" />
            </Grid>

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


export default Notifications;
