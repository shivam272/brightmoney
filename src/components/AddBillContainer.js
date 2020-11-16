import AddBill from "./AddBill";
import { connect } from "react-redux";
import {
  addBill,
  deleteBill,
  openModal,
  getFilteredList,
  getAllBills,
} from "../redux/actioncreator";

const mapStateToProps = (state) => {
  return {
    bills: state.bills.billsList,
    currentCategoryFilter: state.bills.currentCategoryFilter,
    filteredBillList: state.bills.filteredBillList,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addBill: (config) => {
      dispatch(addBill(config));
    },
    openModal: (id) => {
      dispatch(openModal(id));
    },
    deleteBill: (id) => {
      dispatch(deleteBill(id));
    },
    getFilteredList: (category) => {
      dispatch(getFilteredList(category));
    },
    getAllBills: () => {
      dispatch(getAllBills());
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(AddBill);
