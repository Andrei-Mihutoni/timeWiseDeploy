import React from "react";

import Header from '../components/Header'
import Footer from '../components/Footer'
import { CssBaseline } from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  return (
   <div>
     <CssBaseline />
     {/* <Header /> */}
      
     <Header />
     <div className={classes.root}>
       <Container fixed>
         
      <Grid container spacing={3}>
         <Grid item xs={6}>
          <h2 className={classes.paper,'marginTopHome1'}>Hello Nitzan</h2>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper,'marginTopHome1 request'}><h3><span>2 new</span> shift requests</h3></Paper>
        </Grid>
        <Grid item xs={12}>
          <h2 className="marginTopHome2">Home</h2>
        </Grid>
        <Grid item xs={12}>
          <p className="marginTopHome2">Tap an action below to get started</p>
        </Grid>
        <Box borderBottom={2} style={ {width: '100vw', borderColor: 'gray', margin:'10px' }} />

        <Grid item xs={6}>
          <h3 className="marginTopHome2">Add new shift</h3>
        </Grid>
        <Grid item xs={6}>
          <Link to="/usersList">
          <Button variant="contained" style={{
        backgroundColor: "#009bcc",
        color:"white",
      }}>
        ADD SHIFT
      </Button>
      </Link>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px' }} />
        <Grid item xs={6}>
          <h3 className="marginTopHome2">Edit a shift</h3>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" style={{
        backgroundColor: "#009bcc",
        color:"white",
      }}>
        EDIT SHIFT
      </Button>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px'  }} />
        <Grid item xs={6}>
          <h3 className="marginTopHome2">All shift requests</h3>
        </Grid>
       <Grid item xs={6}>
          <Button variant="contained" style={{
        backgroundColor: "#009bcc",
        color:"white",
      }}>
       REQUESTS
      </Button>
        </Grid>
        <Box borderBottom={1} style={ {width: '100vw', borderColor: 'gray', margin:'10px'  }} />
         <Grid item xs={6}>
          <h3 className="marginTopHome2">All shifts </h3>
        </Grid> 
        <Grid item xs={6}>
          <Link to="/Calendar">

          <Button variant="contained" style={{
        backgroundColor: "#009bcc",
        color:"white",
      }}>
        CALENDAR
      </Button>
      </Link>
        </Grid>
      </Grid>
      
      </Container>
    </div>
    <div  style={{marginTop:'150px'}}>
     <Footer/>
     </div>
   </div>
  );
}

export default Home;


