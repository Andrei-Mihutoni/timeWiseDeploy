import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Settings from '../components/Settings'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const currentPageName = "SETTINGS";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function SettinPage() {

  const classes = useStyles();
  return (
<>
<Header currentPageName={currentPageName}/>
    <CssBaseline />
     <div className={classes.root}>
       <Grid container>
         <Container>
          <Grid item xs={12}>
              <h2 className={(classes.paper, "marginTopHome1")}>
              {currentPageName} </h2>
              <Divider style={{marginTop:'10px'}} variant="middle" />
            </Grid>
            </Container>
    <Grid style={{marginTop:'50px'}}  item xs={12}>
   <Settings />
  </Grid>
  
    </Grid>
    </div>
 <div  style={{marginTop:'250px'}}>
       <Footer/>
       </div>
</>
);
}
export default SettinPage;
