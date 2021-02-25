import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBill from "./components/AddBillContainer";
import Graph from "./components/Graph";
import { connect } from "react-redux";
import { getFilteredList, getAllBills, closeGraph } from "./redux/actioncreator";
import "./App.css";

function App(props) {
  const renderError = (currentBudget) => {
    if (currentBudget >= 0) {
      return <AddBill budgetNegative={false} />;
    } else {
      return <AddBill budgetNegative={true} />;
    }
  };
  return (
    <div>
      <Header budget={props.budget} />
      {renderError(props.budget)}
      {props.openModal ? (
        <Modal
          bill={props.selectedBill}
          getFilteredList={props.getFilteredList}
          getAllBills={props.getAllBills}
          currentCategoryFilter={props.currentCategoryFilter}
          filteredListRequested={props.filteredListRequested}
        />
      ) : null}
      {props.openGraphModal ? <Graph data={props.billsList} closeGraph={props.closeGraph} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    budget: state.bills.currentBudget,
    openModal: state.bills.openModal,
    currentCategoryFilter: state.bills.currentCategoryFilter,
    filteredBillList: state.bills.filteredBillList,
    filteredListRequested: state.bills.filteredListRequested,
    billsList: state.bills.billsList,
    openGraphModal: state.bills.openGraphModal,
    data: "shivam34",
  };
};

const mapActionToProps = (dispatch) => {
  return {
    getFilteredList: (category) => {
      dispatch(getFilteredList(category));
    },
    getAllBills: () => {
      dispatch(getAllBills());
    },
    closeGraph: () => {
      dispatch(closeGraph());
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(App);
