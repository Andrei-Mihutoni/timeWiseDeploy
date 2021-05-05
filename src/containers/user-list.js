import React, { Componenet } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function UserList(props) {
  const users = props.users.map((user) => (
    // Correct! Key should be specified inside the array.
    <p key={user.toString()} value={user}>
      {user.name}
    </p>
  ));
  return <div>{users}</div>;
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(UserList);
