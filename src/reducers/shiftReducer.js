import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
  POST_SHIFT_REQUEST,
  POST_SHIFT_SUCCESS,
  POST_SHIFT_FAILURE,
  UPDATE_SHIFT_TO_ADD,
  UPDATE_SHIFT_DAY,
} from "../actions/shiftTypes";

const initialState = {
  loading: false,
  shifts: [],
  error: "",
  selectedDate: "",
  shiftToAdd: { day: "", shiftTime: "", shiftLocation: "", worker: "" },
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
        shifts: action.payload,
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
        shifts: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
