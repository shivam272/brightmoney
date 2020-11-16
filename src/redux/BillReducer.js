import { thisMonthIncome } from "../config/constant";
import { combineReducers } from "redux";
import * as actions from "./actionList";

const initialState = {
  currentCategoryFilter: "All",
  filteredListRequested: false,
  selectedBill: null,
  currentBudget: thisMonthIncome,
  billsList: [],
  filteredBillList: [],
  openModal: false,
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      const selectedBill = state.billsList.find((el) => el.id === action.id);
      return {
        ...state,
        openModal: true,
        selectedBill: { ...selectedBill },
      };
    case actions.GET_FILTERED_LIST:
      let filteredList = state.billsList.filter(
        (el) => el.category === action.category
      );
      if (action.category === "All") {
        filteredList = [...state.billsList];
      }
      return {
        ...state,
        filteredBillList: [...filteredList],
        currentCategoryFilter: action.category,
        filteredListRequested: true,
      };
    case actions.GET_ALL_BILLS:
      return {
        ...state,
        filteredBillList: [],
        currentCategoryFilter: "All",
        filteredListRequested: false,
      };
    case actions.CANCEL_CHANGES:
      return {
        ...state,
        openModal: false,
        selectedBill: null,
      };
    case actions.SAVE_CHANGES: {
      const billIndex = state.billsList.findIndex((el) => el.id === action.id);
      const copy = [...state.billsList];
      copy[billIndex] = { id: action.id, ...action.newConfig };
      const value =
        Number(state.currentBudget) +
        Number(state.billsList[billIndex].value) -
        Number(action.newConfig.value);
      return {
        ...state,
        openModal: false,
        selectedBill: null,
        billsList: [...copy],
        currentBudget: value,
      };
    }
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
