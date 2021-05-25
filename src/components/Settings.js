import { React, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
// import SketchColor from "./ColorPicker";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { SketchPicker } from "react-color";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  settingTexts: {
    textAlign: "left",
    marginLeft: "45px",
  },
}));

function Settings() {
  const classes = useStyles();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [color, setColor] = useState("blue");

  const handleChangeComplete = (mycolor) => {
    setColor({ background: mycolor.hex });
    console.log(color);
  };
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
          <div style={{ color }}>Hello</div>
          <Grid style={{ marginTop: "15px" }} xs={6}>
            <SketchPicker
              color={color}
              onChangeComplete={(color) => {
                setColor(color.hex);
              }}
            />
          </Grid>
          <Grid style={{ marginTop: "25px" }} xs={6}>
            <p className={classes.settingTexts}>Dark theme</p>
          </Grid>
          <Grid style={{ marginTop: "15px" }} xs={6}>
            <FormControlLabel
              style={{ marginLeft: "20px" }}
              control={
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Settings;
