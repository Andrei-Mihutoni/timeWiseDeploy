import { React, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import SketchColor from "./ColorPicker";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { changeThemeMainColor } from "../actions/shiftActions";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  settingTexts: {
    textAlign: "left",
    marginLeft: "45px",
  },
}));

export default function Settings() {
  const classes = useStyles();

  return (
    <div className="settings">
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <h3 className="settingIntro">Settings</h3>
          </Grid>
          <Grid style={{ marginTop: "25px" }} xs={6}>
            <p className={classes.settingTexts}>Profile picture</p>
          </Grid>
          <Grid style={{ marginTop: "15px" }} xs={6}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#009bcc",
                color: "white",
              }}
            >
              UPLOAD
            </Button>
          </Grid>
          <Grid style={{ marginTop: "25px" }} xs={6}>
            <p className={classes.settingTexts}>Company logo</p>
          </Grid>
          <Grid style={{ marginTop: "15px" }} xs={6}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#009bcc",
                color: "white",
              }}
            >
              UPLOAD
            </Button>
          </Grid>
          <Grid style={{ marginTop: "25px" }} xs={6}>
            <p className={classes.settingTexts}>Primary color</p>
          </Grid>
          <Grid style={{ marginTop: "15px" }} xs={6}>
            <SketchColor></SketchColor>
          </Grid>
          <Grid style={{ marginTop: "25px" }} xs={6}>
            <p className={classes.settingTexts}>Dark theme</p>
          </Grid>
          <Grid style={{ marginTop: "15px" }} xs={6}></Grid>
        </Grid>
      </Container>
    </div>
  );
}
