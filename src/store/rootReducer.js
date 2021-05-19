import { combineReducers } from "redux";
import todayRequestsReducer from "./todayRequests/reducer";
import specificRequestReducer from "./specificRequest/reducer";

export default combineReducers({
  todayRequests: todayRequestsReducer,
  specificRequest: specificRequestReducer,
});
