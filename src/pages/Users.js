import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserList from "../containers/UserList";
import ShiftList from "../containers/ShiftList";

function Users() {
  return (
    <div className="Users">
      <Header />

      <UserList></UserList>
      <ShiftList></ShiftList>
      <Footer />
    </div>
  );
}
export default Users;
