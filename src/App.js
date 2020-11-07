import React from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBill from "./components/AddBill";
import { thisMonthIncome } from "./config/constant";
import "./App.css";

function App() {
  const [budget, setBudget] = React.useState(thisMonthIncome);
  const updateBudget = (expenses) => {
    console.log("called" + expenses);
    setBudget(budget - expenses);
  };
  return (
    <div>
      <Header budget={budget} />
      <AddBill updateBudget={updateBudget} />
      <Modal />
    </div>
  );
}

export default App;
