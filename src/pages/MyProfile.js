import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from "../views/profile";

function MyProfile(props) {
  const currentPageName = props.location.pathname.substring(1);
  
  
  return (
    <div className="MyProfile">
      <Header currentPageName={currentPageName} />
     <Profile className="profile"/>


       <div  style={{marginTop:'150px'}}>
       <Footer/>
       </div>
    </div>
  );
}
export default MyProfile;


