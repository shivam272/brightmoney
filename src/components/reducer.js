const initialState = {
  bills: [],
};

export const bills = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BILL":
      return { ...state, bills: [...state.bills, action.bill] };
    default:
      return state;
  }
};
