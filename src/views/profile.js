import React, { useEffect } from "react";
import { addUser, fetchUsers } from "../actions/userActions";
import { connect } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";

function Profile({ userData, fetchUsers, addUser }) {
  const { user } = useAuth0();
  const { name, picture, email } = user;
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {

    console.log(user.nickname);

    let userEmail = Object.keys(user.nickname);
    let userNickname = user.nickname;
    console.log(userNickname)

    const newUser = {
      email: user.email,
      nickname: userNickname
    };
    // userData.users.forEach((newUser) => {
    // if (newUser.email !== user.email) {
    addUser(newUser);
    // }
    // });
  }, []);

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="userProfileJson">{JSON.stringify(user, null, 2)}</pre>
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
    addUser: () => dispatch(addUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
