const initialState = { todayRequests: [] };

export default function todayRequestsReducer(state = initialState, action) {
  switch (action.type) {
    case "todayRequestsList/fetched":
      console.log("payload", action.payload);
      return {
        todayRequests: action.payload,
      };

    default:
      return state;
  }
}
