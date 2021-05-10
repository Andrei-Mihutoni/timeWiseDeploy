import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserList from "../containers/UserList";


function Users() {
  return (
    <div className="Users">
      <Header />
     
     <UserList></UserList>
      
       <Footer/>
    </div>
  );
}
export default Users;


