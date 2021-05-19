import { apiUrl } from "../../config/constants";
import axios from "axios";

export function todayRequestsList(data) {
  console.log("data", data);
  return {
    type: "todayRequestsList/fetched",
    payload: data,
  };
}

export function fetchTodayRequests(date) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/requests
    `);
    const allRequests = response.data;
    function todayRequests() {
      const one = allRequests.filter((request) => {
        const startDate = request.startDate.substr(0, 10);
        return startDate === date;
      });
      return one;
    }
    dispatch(todayRequestsList(todayRequests()));
  };
}
