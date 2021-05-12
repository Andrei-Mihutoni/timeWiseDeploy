import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

const endpoint = "https://danieldb-2683.restdb.io/rest/timewiseusers";
const key = "5f959ef84b77c1637d147d90";
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch(`${endpoint}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": key,
        "cache-control": "no-cache",
      },
    })
      .then((response) => response.json())

      .then((data) => {
        // response.data is the users
        const users = data;
        console.log(users, "users");
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
