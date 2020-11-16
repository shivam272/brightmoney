import * as actions from "./actionList";

export const addBill = (bill) => {
  return {
    type: actions.ADD_BILL,
    bill,
  };
};

export const editBill = (id, newConfig) => {
  return {
    type: actions.EDIT_BILL,
    id,
    newConfig,
  };
};

export const deleteBill = (id) => {
  return {
    type: actions.DELETE_BILL,
    id,
  };
};

export const openModal = (id) => {
  return {
    type: actions.OPEN_MODAL,
    id,
  };
};

export const saveChanges = (id, newConfig) => {
  return {
    type: actions.SAVE_CHANGES,
    id,
    newConfig,
  };
};

export const cancelChanges = () => {
  return {
    type: actions.CANCEL_CHANGES,
  };
};

export const getFilteredList = (category) => {
  return {
    type: actions.GET_FILTERED_LIST,
    category,
  };
};

export const getAllBills = () => {
  return {
    type: actions.GET_ALL_BILLS,
  };
};

export const getGraph = () => {
  return {
    type: actions.GET_GRAPH,
  };
};
