import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer"
import ClientLogo from "../media/NyLivLogo.png"
import Container from "@material-ui/core/Container";
import Daniel from '../media/Staff/Daniel.jpeg';
import Nitzan from '../media/Staff/Nitzan.jpeg';
import Andrei from '../media/Staff/Andrie.jpeg';
import Ioana from '../media/Staff/Ioana.jpg';
import Divider from "@material-ui/core/Divider";


const currentPageName = "CONTACTS";
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
     maxWidth: '100px',
     borderRadius: '50%',
    border: '1px solid rgba(8,8,8,0.5)',
    boxShadow: '1px 1px 5px 2px rgba(8,8,8,0.3)',
    float:'left',
  }
}));

function Contacts() {

  const classes = useStyles();
  return (
<>
<Header currentPageName="CONTACTS"/>
    <CssBaseline />
     <div className={classes.root}>
           <Container>
       <Grid container>
         <Grid>
         <h2 className={(classes.paper, "marginTopHome1")}>
              {currentPageName} </h2>
              <Divider style={{marginTop:'20px'}} variant="middle" />
            </Grid>
             <Grid className={classes.marginLeft} xs={12} >
               <img className="clientLogo" src={ClientLogo} alt="Client Logo" style={{marginTop:'5px', float:'left'}}/>
             </Grid>
               <Grid style={{marginTop:'50px'}}  item xs={8}>
         <p className="ProfileIntro"><span>Name:</span> Nitzan</p>
          <p className="ProfileIntro"><span> Email: </span>nit@timewise.com</p>
          <p className="ProfileIntro"><span>Phone:</span> +45 6061 9796</p>
   
  </Grid>
   <Grid style={{marginTop:'40px'}}  item xs={4}>
   <img className={classes.staffImg} src={Nitzan} alt="Nitzan" />
  </Grid>
               <Grid style={{marginTop:'50px'}}  item xs={8}>
         <p className="ProfileIntro"><span>Name:</span> Andrei</p>
          <p className="ProfileIntro"><span> Email: </span>and@timewise.com</p>
          <p className="ProfileIntro"><span>Phone:</span> +45 6061 9797</p>
   
  </Grid>
   <Grid style={{marginTop:'40px'}}  item xs={4}>
   <img className={classes.staffImg} src={Andrei} alt="Andrei" />
  </Grid>
      <Grid style={{marginTop:'50px'}}  item xs={8}>
         <p className="ProfileIntro"><span>Name:</span> Daniel</p>
          <p className="ProfileIntro"><span> Email: </span>dan@timewise.com</p>
          <p className="ProfileIntro"><span>Phone:</span> +45 6061 9798</p>
   
  </Grid>
   <Grid style={{marginTop:'40px'}}  item xs={4}>
   <img className={classes.staffImg} src={Daniel} alt="Daniel" />
  </Grid>
    <Grid style={{marginTop:'50px'}}  item xs={8}>
         <p className="ProfileIntro"><span>Name:</span> Ioana</p>
          <p className="ProfileIntro"><span> Email: </span>ioa@timewise.com</p>
          <p className="ProfileIntro"><span>Phone:</span> +45 6061 9799</p>
   
  </Grid>
   <Grid style={{marginTop:'40px'}}  item xs={4}>
   <img className={classes.staffImg} src={Ioana} alt="Ioana" />
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
export default Contacts;
