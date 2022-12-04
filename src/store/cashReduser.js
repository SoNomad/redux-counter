const initialState = {
  cash: 220,
};

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case "minus":
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    default:
      return state;
  }
};
