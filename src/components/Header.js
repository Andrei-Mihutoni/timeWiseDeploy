import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LogoutButton from "../components/logout-button";
import SideDrawer from "./SideDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

// Theme changer
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, customTheme } from "../theme";
import { GlobalStyles } from "../global";
import Toggle from "../components/Toggle";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
  headerBackground: {},

  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  sectionIcons: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

const navLinks = [];

function Header(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const classes = useStyles();
  return (
    <div
      className={classes.grow}
      style={{ backgroundColor: props.shiftData.themeColor1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.currentPageName}{" "}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionIcons}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
              </>
            </ThemeProvider>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                {/* <MailIcon /> */}
                <FontAwesomeIcon icon={faComment} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="aburger menu"
              aria-haspopup="true"
              color="inherit"
            >
              <SideDrawer navLinks={navLinks} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

export default connect(mapStateToProps)(Header);
