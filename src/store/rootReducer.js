import { combineReducers } from "redux";
import todayRequestsReducer from "./todayRequests/reducer";

export default combineReducers({
  todayRequests: todayRequestsReducer,
});
