import React from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Settings from '../components/Settings'
import Header from "../components/Header";
import Footer from "../components/Footer"

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
<Header currentPageName="SETTINGS"/>
    <CssBaseline />
     <div className={classes.root}>
       <Grid container>
    <Grid style={{marginTop:'100px'}}  item xs={12}>
   <Settings />
  </Grid>
  
    </Grid>
    </div>
 <div  style={{marginTop:'150px'}}>
       <Footer/>
       </div>
</>
);
}
export default SettinPage;
