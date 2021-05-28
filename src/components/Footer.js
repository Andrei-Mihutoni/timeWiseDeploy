import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TodayIcon from "@material-ui/icons/Today";
import { Home } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    backgroundColor: "#009bcc",
  },
  footerIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
function Footer({ shiftData }) {
  const classes = useStyles();
  console.log(shiftData);

  return (
    <Grid
      className="footerContainer"
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ backgroundColor: shiftData.themeColor1 }}
    >
      <Grid item xs={4}>
        <NavLink exact={true} activeClassName="is-active" to="/Calendar">
          <div className="footerBtn">
            <ListItemIcon className={classes.footerIcons}>
              {/* <TodayIcon /> */}
              <span className="iconName">CALENDAR</span>
            </ListItemIcon>
          </div>
        </NavLink>
      </Grid>

      <Grid item xs={4}>
        <NavLink activeClassName="is-active" to="/Home">
          <div className="footerBtn">
            <ListItemIcon className={classes.footerIcons}>
              {/* <Home /> */}
              <span className="iconName"> HOME</span>
            </ListItemIcon>
          </div>
        </NavLink>
      </Grid>

      <Grid item xs={4}>
        <NavLink activeClassName="is-active" to="/MyProfile">
          <div className="footerBtn">
            <ListItemIcon className={classes.footerIcons}>
              {/* <AccountCircleIcon /> */}
              {/* <p style={{ marginTop: "-10px" }}>My Profile</p> */}
              <span className="iconName">PROFILE</span>
            </ListItemIcon>
          </div>
        </NavLink>
      </Grid>
    </Grid>

    //  </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

export default connect(mapStateToProps)(Footer);
