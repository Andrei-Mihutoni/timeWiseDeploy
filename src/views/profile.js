import React, { useEffect } from "react";
import { addUser, fetchUsers } from "../actions/userActions";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { CssBaseline } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from '@material-ui/core/Hidden'; 
import ClientLogo from "../media/NyLivLogo.png"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

    
}));


function Profile({ userData, fetchUsers, addUser }) {
  
  const { user } = useAuth0();
  const { name, picture, email } = user;
  const classes = useStyles();
  useEffect(() => {
    fetchUsers();
  }, []);
  // useEffect(() => {
  //   console.log(user);
  //   userData.users.forEach((newUser) => {
  //     if (newUser.email !== user.email) {
  //       addUser(user);
  //     }
  //   });
  // }, []);
 

  return (


      
    <div>
      <CssBaseline />
       <Container>
          <Grid container spacing={3}>
             <Grid  item xs={12} >
               <img className="clientLogo" src={ClientLogo} alt="Client Logo" style={{marginTop:'25px', float:'left'}}/>
             </Grid>
    
            <Grid item xs={12}>
          <img
          className="profilePic"
            src={picture}
            alt="Profile"
            
          />
       </Grid>
                <Grid className='profileNameMarginTop' xs={12} >
          <p className="ProfileIntro"><span>Name:</span> {name}</p>
          <p className="ProfileIntro"><span> Email: </span>{email}</p>
          <p className="ProfileIntro"><span>Phone:</span> +45 6061 9798</p>
        </Grid>
       
        </Grid>
        </Container>
     
      <div className="row">
        <Hidden only={['sm', 'xs', 'md', 'lg', 'xl']}>
        <pre className="userProfileJson">{JSON.stringify(user, null, 2)}</pre>
        </Hidden>
      </div>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: (newUser) => dispatch(addUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
