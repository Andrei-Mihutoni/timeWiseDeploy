import { React, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../views/profile";
import Settings from "../components/Settings";

function MyProfile(props) {
  const currentPageName = props.location.pathname.substring(1);

  return (
    <div className="MyProfile">
      <Header currentPageName={currentPageName} />
      <Profile className="profile" />
      <div style={{ marginTop: "100px" }}>
        <Settings />
      </div>
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </div>
  );
}
export default MyProfile;
