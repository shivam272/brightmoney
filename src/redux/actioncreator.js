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

export const openModal = () => {
  return {
    type: actions.OPEN_MODAL,
  };
};
