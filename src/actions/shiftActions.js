import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
} from "./shiftTypes";

const endpoint = "https://danieldb-2683.restdb.io/rest/timewiseshifts";
const key = "5f959ef84b77c1637d147d90";
export const fetchShifts = () => {
  return (dispatch) => {
    dispatch(fetchShiftsRequest());
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
        // response.data is the shifts
        const shifts = data;
        console.log(shifts, "shifts");
        dispatch(fetchShiftsSuccess(shifts));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchShiftsFailure(error.message));
      });
  };
};

export const fetchShiftsRequest = () => {
  return {
    type: FETCH_SHIFTS_REQUEST,
  };
};

export const fetchShiftsSuccess = (shifts) => {
  return {
    type: FETCH_SHIFTS_SUCCESS,
    payload: shifts,
  };
};

export const fetchShiftsFailure = (error) => {
  return {
    type: FETCH_SHIFTS_FAILURE,
    payload: error,
  };
};
