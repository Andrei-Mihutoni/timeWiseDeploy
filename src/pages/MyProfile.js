import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../views/profile";
import Settings from "../components/Settings";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";


const currentPageName = 'PROFILE';

function MyProfile(props) {
  // const currentPageName = props.location.pathname.substring(1);

  return (
    <div className="MyProfile">
      <Header currentPageName={currentPageName} />
      <Container>
       <Grid item xs={12}>
              <h2 className="marginTopHome1">
              {currentPageName} </h2>
              <Divider style={{marginTop:'20px'}} variant="middle" />
            </Grid>
            </Container>
      <Profile className="profile" />
      <div style={{ marginTop: "50px" }}>
        <Settings />
      </div>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default MyProfile;
