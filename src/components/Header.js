import React from "react";
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

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },
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

export default function Header(props) {
  const classes = useStyles();



  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.currentPageName}{" "}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionIcons}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
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
