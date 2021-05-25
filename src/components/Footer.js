import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TodayIcon from "@material-ui/icons/Today";
import { Home } from "@material-ui/icons";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    backgroundColor: '#009bcc', 
  },
  footerIcons:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  }
});

export default function Footer() {
  const classes = useStyles();
  

  return (
 
      
         
              <Grid className="footerContainer" container direction="row"
  justify="center" alignItems="center" >
                <Grid item xs={4}>
                  <NavLink
                    exact={true}
                    activeClassName="is-active"
                    to="/Calendar"
                  >
                    <div className="footerBtn">
                    <ListItemIcon className={classes.footerIcons}>
                    <TodayIcon />
                    <span className="iconName">Calendar</span>
                    </ListItemIcon>
                    </div>
   
                  </NavLink>
                </Grid>

                <Grid item xs={4}>
                  <NavLink activeClassName="is-active" to="/Home">
                       <div className="footerBtn">
                    <ListItemIcon className={classes.footerIcons}>
                    <Home />
                    <span className="iconName"> Home</span> 
    
      
                    </ListItemIcon>
                    </div>
                  </NavLink>
                </Grid>

                <Grid item xs={4}>
                  <NavLink activeClassName="is-active" to="/MyProfile">
                     <div className="footerBtn">
                    <ListItemIcon className={classes.footerIcons}>
                    <AccountCircleIcon />
                    {/* <p style={{ marginTop: "-10px" }}>My Profile</p> */}
                   <span className="iconName">Profile</span> 
                    </ListItemIcon>
                    </div>
                  </NavLink>
                </Grid>
              </Grid>
       
    
    //  </AppBar>
  );
}
