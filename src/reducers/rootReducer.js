import { combineReducers } from "redux";
import userReducer from "./userReducer";
import shiftReducer from "./shiftReducer";

const rootReducer = combineReducers({
  user: userReducer,
  shift: shiftReducer,
});

export default rootReducer;
