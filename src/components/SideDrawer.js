import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import LogoutButton from "../components/logout-button";
import CloseIcon from "@material-ui/icons/Close";
import { Home } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 200,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
    textAlign: "right",
    marginTop: "10px",
    marginLeft: "0px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,

  },
  listItemIcon: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    color: "black",
  },
}));

const SideDrawer = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {/* <CloseIcon style={{ marginRight: "10px" }} className="closeMenu" fontSize="large" /> */}

        <Link
          style={{ marginLeft: "-30px", marginTop: "30px" }}
          className={classes.listItemIcon}
          to="/Home"
        >
          <Home style={{ color: "black" }} />
          Home{" "}
        </Link>
        <Link
          style={{ marginLeft: "-30px", marginTop: "20px" }}
          className={classes.listItemIcon}
          to="/MyProfile"
        >
          <AccountCircleIcon style={{ color: "black" }} />
          Profile{" "}
        </Link>
        <Link
          style={{ marginLeft: "-25px", marginTop: "20px" }}
          className={classes.listItemIcon}
          to="/Settings"
        >
          <SettingsIcon style={{ color: "black" }} />
          Settings{" "}
        </Link>
        <Link
          style={{ marginLeft: "-20px", marginTop: "20px" }}
          className={classes.listItemIcon}
          to="/Contacts"
        >
          <ContactsIcon style={{ color: "black" }} />
          Contacts{" "}
        </Link>
      </List>

      <List className="logOutMenu">
        <ListItem>
          <Link
            style={{ marginTop: "95%", marginLeft: "-5px" }}
            className={classes.listItemIcon}
            to=""
          >
            <ExitToAppIcon style={{ color: "black" }} />
            {/* <p className="logout">Log Out</p>  </Link> */}
            <LogoutButton className="buttonCustomLogout" />{" "}
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu fontSize="large" style={{ color: `white` }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
