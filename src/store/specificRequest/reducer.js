const initialState = {
  request: [],
};

export default function specificRequestReducer(state = initialState, action) {
  switch (action.type) {
    case "specificRequest/fetched":
      return {
        request: action.payload,
      };

    default:
      return state;
  }
}
