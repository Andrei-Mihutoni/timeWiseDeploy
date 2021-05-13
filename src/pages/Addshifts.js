import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomCalendar from "../CustomCalendar1";
import { CssBaseline } from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
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




function Addshifts() {
      const classes = useStyles();
       const [shiftLocation, setshiftLocation] = React.useState('');
       const [shiftTime, setShiftTime] = React.useState('');

  const handleTimeChange = (event) => {
    setShiftTime(event.target.value);
    
};
  const handleLocationChange = (event) => {
    setshiftLocation(event.target.value);
  };
  return (
   <div>
     <CssBaseline />      
     <Header />

     <div className={classes.root} style={{marginBottom:'100px'}} >
       <Container  >    
      <Grid container spacing={2}>
         <Grid item xs={12}>
          <h2 className={classes.paper,'marginTopHome1'}>Add a shift</h2>
        </Grid>
        
        <Grid item xs={12}>
          <h2 className="marginTopHome2">Location, Date and time</h2>
        </Grid>
        <Grid item xs={12}>
          <p className="marginTopHome2">Choose a location, Date and time to add the shift</p>
        </Grid>
         <Grid item xs={6}>
         <FormControl className={classes.formControl}>
        <InputLabel id="select-Location">Location</InputLabel>
        <Select
          labelId="select-Location"
          id="select-Location"
          value={shiftLocation}
          onChange={handleLocationChange}
        >
          <MenuItem value="location">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Amager</MenuItem>
          <MenuItem value={20}>Østerbro</MenuItem>
          <MenuItem value={30}>Valby</MenuItem>
          <MenuItem value={30}>Frederiksberg</MenuItem>
        </Select>
        <FormHelperText>Chose The Location</FormHelperText>
        
      </FormControl>
      </Grid>
      <Grid item xs={6}>
         <FormControl className={classes.formControl}>
        <InputLabel id="select-Time">Time</InputLabel>
        <Select
          labelId="select-Time"
          id="select-Time"
          value={shiftTime}
          onChange={handleTimeChange}
        >
          <MenuItem value="time">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10:00 - 15:00</MenuItem>
          <MenuItem value={20}>14:00 - 19:00</MenuItem>
        </Select>
        <FormHelperText>Choose The Time</FormHelperText>
        
      </FormControl>
      </Grid>
        <Grid item xs={12}>
         <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <h2>Choose a date</h2>
      </Grid>
       <Grid item xs={12} style={{marginTop:'-50px', marginBottom:'-50px'}}>
         <CustomCalendar />
       </Grid>
      
       <Grid item xs={6} style={{marginTop:'20px'}}>
          <Link to="/home">

          <Button  variant="contained" style={{
        backgroundColor: "#E5E5E5",
        color:"black",
        borderRadius:'28px',
        width:'100px',
      }}>
        Back
      </Button>
      </Link>
        </Grid>
        <Grid item xs={6} style={{marginTop:'20px'}}>
          <Link to="/Confirmshift">

          <Button variant="contained" style={{
        backgroundColor: "#03DAC5",
        color:"white",
        borderRadius:'28px',
        width:'100px',
      }}>
        Next
      </Button>
      </Link>
        </Grid>
     
      </Grid>
      
      </Container>
   
     
   
  
   
   </div>
   <div style={{marginTop:'150px'}}>
   <Footer />
  </div>
   </div>
  );
}
export default Addshifts;