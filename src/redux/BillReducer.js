import { thisMonthIncome } from "../config/constant";
import { combineReducers } from "redux";
import * as actions from "./actionList";

const initialState = {
  currentFilter: "",
  toBePaidBills: [],
  selectedBill: null,
  currentBudget: thisMonthIncome,
  billsList: [],
  filteredBillList: [],
  openModal: false,
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };
    case actions.DELETE_BILL:
      const bill = state.billsList.find((el) => el.id === action.id);
      const value = Number(state.currentBudget) + Number(bill.value);
      const newbills = state.billsList.filter((el) => el.id !== action.id);
      return {
        ...state,
        billsList: [...newbills],
        currentBudget: value,
      };
    case actions.EDIT_BILL:
      return state;
    case actions.ADD_BILL:
      return {
        ...state,
        billsList: [...state.billsList, action.bill],
        currentBudget: state.currentBudget - action.bill.value,
      };
    default:
      return state;
  }
};

export default combineReducers({
  bills: BillReducer,
});
