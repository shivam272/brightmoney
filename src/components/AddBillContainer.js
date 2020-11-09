import AddBill from "./AddBill";
import { connect } from "react-redux";
import {
  addBill,
  deleteBill,
  openModal,
  editBill,
} from "../redux/actioncreator";

const mapStateToProps = (state) => {
  return {
    bills: state.bills.billsList,
  };
};

const mapActionToProps = (dispatch) => {
  return {
    addBill: (config) => {
      dispatch(addBill(config));
    },
    editBill: (id, config) => {
      dispatch(editBill(id, config));
    },
    openModal: () => {
      dispatch(openModal());
    },
    deleteBill: (id) => {
      dispatch(deleteBill(id));
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(AddBill);
