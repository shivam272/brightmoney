import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBill from "./components/AddBillContainer";
import { connect } from "react-redux";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <div>
      <Header budget={props.budget} />
      <AddBill />
      {props.openModal ? <Modal /> : null}
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
