import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
  POST_SHIFT_REQUEST,
  POST_SHIFT_SUCCESS,
  POST_SHIFT_FAILURE,
  UPDATE_SHIFT_TO_ADD,
  UPDATE_SHIFT_TIME,
  UPDATE_SHIFT_LOCATION,
  SET_SHIFT_DETAILS,
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

// Posting the shifts

export const postShift = (shift) => {
  let postData = JSON.stringify(shift);

  return (dispatch) => {
    dispatch(postShiftRequest(postData));
    fetch(`${endpoint}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": key,
        "cache-control": "no-cache",
      },
      body: postData,
    })
      .then((response) => response.json())

      .then((data) => {
        // response.data is the shifts
        const shifts = data;
        console.log(shifts, "shifts");
        dispatch(postShiftSuccess(shifts));
        dispatch(fetchShiftsRequest());
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(postShiftFailure(error.message));
      });
  };
};
// Post functions
export const postShiftRequest = () => {
  return {
    type: POST_SHIFT_REQUEST,
  };
};
export const postShiftSuccess = (shifts) => {
  return {
    type: POST_SHIFT_SUCCESS,
    payload: shifts,
  };
};

export const postShiftFailure = (error) => {
  return {
    type: POST_SHIFT_FAILURE,
    payload: error,
  };
};

// Update state
export const updateShiftToAdd = (shiftToAdd) => {
  console.log("in updateShiftToAdd ", shiftToAdd);
  return {
    type: UPDATE_SHIFT_TO_ADD,
    payload: shiftToAdd,
  };
};

export const updateShiftTime = (shiftTime) => {
  console.log("in updateShiftTime ", shiftTime);
  return {
    type: UPDATE_SHIFT_TIME,
    payload: shiftTime,
  };
};

export const updateShiftLocation = (shiftLocation) => {
  console.log("in updateShiftLocation ", shiftLocation);
  return {
    type: UPDATE_SHIFT_LOCATION,
    payload: shiftLocation,
  };
};

export const setShiftDetails = (shiftDay) => {
  console.log("in setShiftDetails ", shiftDay);
  return {
    type: SET_SHIFT_DETAILS,
    payload: shiftDay,
  };
};
