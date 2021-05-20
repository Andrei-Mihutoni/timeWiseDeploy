import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Hero, HomeContent } from "../components";

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

function HomePage() {

  const classes = useStyles();
  return (
  <Fragment>
    <CssBaseline />
     <div className={classes.root}>
       <Grid container spacing={3}>
    <Grid  className="homeLogo" item xs={12} spacing={3}>
    <Hero />
  </Grid>
  <Grid className="homeLogin" item xs={12} spacing={12}>
    <HomeContent />
    </Grid>
    </Grid>
    </div>
  </Fragment>
);
}
export default HomePage;
