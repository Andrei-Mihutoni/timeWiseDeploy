import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SideDrawer from "./SideDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title:{
    color:'white',
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

function Header(props) {
 
  const classes = useStyles();
  return (
    <div
      className={classes.grow}
      style={{ backgroundColor: props.shiftData.themeColor1 }}
    >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.currentPageName}
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionIcons}>
           
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to='/Messages'>
              <Badge badgeContent={4} color="secondary">
                <FontAwesomeIcon icon={faComment}  style={{color:'white'}}/>
              </Badge>
              </Link>
              
            </IconButton>
            <IconButton aria-label="show 2 new notifications" color="inherit">
              <Link to='/Notifications'>
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon style={{color:'white'}}/>
              </Badge>
              </Link>
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
     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

export default connect(mapStateToProps)(Header);
