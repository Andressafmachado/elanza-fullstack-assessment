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

//add request
export const newRequest = (
  clientname,
  caretype,
  startDate,
  endDate,
  extraInformation
) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${apiUrl}/requests`, {
        clientname,
        caretype,
        startDate,
        endDate,
        extraInformation,
      });

      dispatch(Request(response.data));
    } catch (e) {
      console.error(e);
    }
  };
};

export const Request = (request) => ({
  type: "careRequest/add",
  payload: request,
});
