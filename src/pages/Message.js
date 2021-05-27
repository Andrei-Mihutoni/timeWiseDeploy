import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Container from "@material-ui/core/Container";
import Daniel from '../media/Staff/Daniel.jpeg';
import Nitzan from '../media/Staff/Nitzan.jpeg';
import Andrei from '../media/Staff/Andrie.jpeg';
import Ioana from '../media/Staff/Ioana.jpg';
import Divider from "@material-ui/core/Divider";

const currentPageName ="MESSAGES"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  marginLeft:{
      marginLeft: '10px',
  }, 
  staffImg:{
     maxWidth: '80px',
     borderRadius: '50%',
    border: '1px solid rgba(8,8,8,0.5)',
    boxShadow: '1px 1px 5px 2px rgba(8,8,8,0.3)',
  },
  smallText:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-end',
      justifyContent:'center',

  },
  headingText:{
      textAlign:'center',
      fontSize:'15px',
      fontWeight:'500',
  },
}));

function Message() {

  const classes = useStyles();
  return (
<>
<Header currentPageName={currentPageName}/>
    <CssBaseline />
     <div className={classes.root}>
           <Container>
       <Grid container>
          <Grid item xs={12}>
              <h2 className={(classes.paper, "marginTopHome1")}>
              {currentPageName} </h2>
              <Divider style={{marginTop:'20px'}} variant="middle" />
            </Grid>
           <Grid style={{marginTop:'40px'}}  item xs={3}>
   <img className={classes.staffImg} src={Daniel} alt="Daniel" style={{float:'left'}}/>
  </Grid>
   <Grid  style={{marginTop:'40px'}}  item xs={6}>
         <h3 className={classes.headingText}>Daniel Momtahanny</h3>
         <p style={{marginTop:'-10px',fontSize:'10px',}}>Grear! see you tomorrow!</p>
  </Grid>
       <Grid className={classes.smallText} style={{marginTop:'80px'}}  item xs={3}>
 <small>Mon</small>
 <small>10:20</small>
  </Grid>

    <Grid style={{marginTop:'30px'}}  item xs={3}>
   <img className={classes.staffImg} src={Nitzan} alt="Nitzan" style={{float:'left'}}/>
  </Grid>
   <Grid  style={{marginTop:'30px'}}  item xs={6}>
         <h3 className={classes.headingText}>Nitzan Moise</h3>
         <p style={{marginTop:'-10px',fontSize:'10px',}}>:) Lets talk! When we meet.</p>
  </Grid>
       <Grid className={classes.smallText} style={{marginTop:'30px'}}  item xs={3}>
 <small>Tue</small>
 <small>11:40</small>
  </Grid>

  <Grid style={{marginTop:'30px'}}  item xs={3}>
   <img className={classes.staffImg} src={Ioana} alt="Ioana" style={{float:'left'}}/>
  </Grid>
   <Grid  style={{marginTop:'30px'}}  item xs={6}>
         <h3 className={classes.headingText}>Ioana Vizitiu</h3>
         <p style={{marginTop:'-10px',fontSize:'10px',}}>Hey! Can you work Thursday 14th?</p>
  </Grid>
       <Grid className={classes.smallText} style={{marginTop:'30px'}}  item xs={3}>
 <small>Mon</small>
 <small>10:20</small>
  </Grid>

  <Grid style={{marginTop:'30px'}}  item xs={3}>
   <img className={classes.staffImg} src={Andrei} alt="Andrei" style={{float:'left'}}/>
  </Grid>
   <Grid  style={{marginTop:'30px'}}  item xs={6}>
         <h3 className={classes.headingText}>Andrei Mihutoni</h3>
         <p style={{marginTop:'-10px',fontSize:'10px',}}>Thanks for taking my shift.</p>
  </Grid>
       <Grid className={classes.smallText} style={{marginTop:'30px'}}  item xs={3}>
 <small>Yesterday</small>
 <small>17:20</small>
  </Grid>
   
    </Grid>
    </Container>
    </div>
 <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
</>
);
}
export default Message;
