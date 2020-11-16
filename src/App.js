import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBill from "./components/AddBillContainer";
import { connect } from "react-redux";
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
      {props.openModal ? <Modal bill={props.selectedBill} /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    budget: state.bills.currentBudget,
    openModal: state.bills.openModal,
  };
};

export default connect(mapStateToProps)(App);
