import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SET_MESSAGE = "SET_MESSAGE";

export function specificRequest(data) {
  console.log("data", data);
  return {
    type: "specificRequest/fetched",
    payload: data,
  };
}

export function fetchSpecificRequest(id) {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/requests/${id}`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
      },
    });
    console.log(response.data);
    dispatch(specificRequest(response.data));
  };
}
