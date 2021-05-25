import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
  POST_SHIFT_REQUEST,
  POST_SHIFT_SUCCESS,
  POST_SHIFT_FAILURE,
  UPDATE_SHIFT_TO_ADD,
  UPDATE_SHIFT_DAY,
  UPDATE_SHIFT_TIME,
  UPDATE_SHIFT_LOCATION,
  SET_SHIFT_DETAILS,
  UPDATE_THEMECOLOR1,
} from "../actions/shiftTypes";

const initialState = {
  loading: false,
  shifts: [],
  error: "",
  selectedDate: "",
  shiftToAdd: { day: "", shiftTime: "", shiftLocation: "", worker: "" },
  shiftLocation: "",
  shiftTime: "",
  shiftDetails: { day: "", shiftTime: "", shiftLocation: "", worker: "" },
  themeColor1: "red",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIFTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHIFTS_SUCCESS:
      return {
        ...state,

        loading: false,
        shifts: state.shifts.concat(action.payload),
        error: "",
      };
    case FETCH_SHIFTS_FAILURE:
      return {
        ...state,

        loading: false,
        shifts: [],
        error: action.payload,
      };
    case POST_SHIFT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SHIFT_SUCCESS:
      return {
        ...state,

        loading: false,
        shifts: state.shifts.concat(action.payload),
        error: "",
      };
    case POST_SHIFT_FAILURE:
      return {
        ...state,

        loading: false,
        shifts: [],
        error: action.payload,
      };
    case UPDATE_SHIFT_DAY:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case UPDATE_SHIFT_TO_ADD:
      console.log("in UPDATE_SHIFT_TO_ADD", action.payload);
      return {
        ...state,
        shiftToAdd: { ...action.payload },
      };
    case UPDATE_SHIFT_LOCATION:
      console.log("in UPDATE_SHIFT_LOCATION", action.payload);
      return {
        ...state,
        shiftLocation: action.payload,
      };
    case UPDATE_SHIFT_TIME:
      console.log("in UPDATE_SHIFT_TIME", action.payload);
      return {
        ...state,
        shiftTime: action.payload,
      };
    case SET_SHIFT_DETAILS:
      let chosenShifts = state.shifts.filter((shift) => {
        console.log(
          shift.day.substring(8, 10),
          action.payload.toISOString().substring(8, 10)
        );

        if (
          shift.day.substring(8, 10) ===
          action.payload.toISOString().substring(8, 10)
        ) {
          console.log(shift);
          return shift;
        }
      });
      let newChosenShifts = chosenShifts[0];
      console.log("in SET_SHIFT_DETAILS", chosenShifts);

      return {
        ...state,
        shiftDetails: { ...state.shiftDetails, ...newChosenShifts },
      };
    case UPDATE_THEMECOLOR1:
      console.log("in UPDATE_THEMECOLOR1", action.payload);
      return {
        ...state,
        themeColor1: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
