import React from "react";
import Table from "./Table";
import "../App.css";
import { categoryOptions, renderDropList } from "../config/constant";

const AddBill = (props) => {
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("Others");
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState("");
  const [error, seterror] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    seterror(false);
    setErrorMessage("");
  }, [desc, category, value]);

  const clearValues = () => {
    setValue("");
    setCategory("Others");
    setDesc("");
    setDate("");
    seterror(false);
    setErrorMessage("");
  };

  const deleteBill = (id) => {
    props.deleteBill(id);
  };

  const editBill = (id) => {
    props.openModal(id);
  };

  const allow = () => {
    if (desc === "" || category === "" || value === "" || date === "") {
      return false;
    }
    return true;
  };

  const submit = () => {
    if (allow()) {
      const newbill = { id: Date.now(), desc, category, value, date };
      const dateFilled = new Date(date);
      if (dateFilled.getMonth() === new Date().getMonth()) {
        props.addBill(newbill);
        props.getAllBills();
        clearValues();
      } else {
        seterror(true);
        setErrorMessage("Date is allowed only for current month");
      }
    } else {
      seterror(true);
      setErrorMessage("All values are mandatory");
    }
  };

  const shouldRenderTable = () => {
    if (props.bills.length) {
      return (
        <Table
          data={
            props.filteredListRequested ? props.filteredBillList : props.bills
          }
          editBill={editBill}
          deleteBill={deleteBill}
          currentCategoryFilter={props.currentCategoryFilter}
          budgetNegative={props.budgetNegative}
          getFilteredList={props.getFilteredList}
          getAllBills={props.getAllBills}
          filteredListRequested={props.filteredListRequested}
        />
      );
    }
    return null;
  };

  const allowRenderAdd = (allow) => {
    const add = (
      <div className="add__container">
        <input
          type="text"
          value={desc}
          className="add__description"
          placeholder="Add description"
          onChange={(event) => setDesc(event.target.value)}
        />
        <input
          type="date"
          className="add__date"
          placeholder="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <select
          type="text"
          className="add__category"
          placeholder="Select category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {renderDropList(categoryOptions)}
        </select>
        <input
          type="number"
          className="add__value"
          placeholder="Value"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="add__btn" onClick={submit}>
          <i className="ion-ios-checkmark-outline"></i>
        </button>
        {error ? <h3 className="error">{errorMessage}</h3> : null}
      </div>
    );
    return allow ? (
      <h2 className="error error-main">
        Adding Bills is not allowed as current budget is negative or Zero
      </h2>
    ) : (
      add
    );
  };

  return (
    <>
      <div className="add">{allowRenderAdd(props.budgetNegative)}</div>
      {shouldRenderTable()}
    </>
  );
};

export default AddBill;
