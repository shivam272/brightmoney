import React from "react";
import Table from "./Table";
import "../App.css";

const AddBill = (props) => {
  const [desc, setDesc] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [value, setValue] = React.useState("");
  const [bills, setBill] = React.useState([]);
  const [error, seterror] = React.useState(false);

  React.useEffect(() => {
    seterror(false);
  }, [desc, category, value]);

  const clearValues = () => {
    setValue("");
    setCategory("");
    setDesc("");
    seterror(false);
  };

  const totalBillsValues = () => {
    const value = bills.reduce((acc, el) => acc + Number(el.value), 0);
    props.updateBudget(value);
  };

  const deleteBill = (id) => {
    const newbills = bills.filter((el) => el.id !== id);
    setBill(newbills);
    totalBillsValues();
  };

  const editBill = (id) => {
    console.log("edit clicked", id);
    totalBillsValues();
  };

  const allow = () => {
    if (desc === "" || category === "" || value === "") {
      return false;
    }
    return true;
  };

  const submit = () => {
    if (allow()) {
      const newbill = { id: Date.now(), desc, category, value };
      setBill((prev) => [...prev, newbill]);
      totalBillsValues();
      clearValues();
    } else {
      seterror(true);
    }
  };

  const shouldRenderTable = () => {
    if (bills.length) {
      return <Table data={bills} editBill={editBill} deleteBill={deleteBill} />;
    }
    return null;
  };

  return (
    <>
      <div className="add">
        <div className="add__container">
          <input
            type="text"
            value={desc}
            className="add__description"
            placeholder="Add description"
            onChange={(event) => setDesc(event.target.value)}
          />
          <input
            type="text"
            className="add__category"
            placeholder="Add category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
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
          {error ? <h3 className="error">All values are required</h3> : null}
        </div>
      </div>
      {shouldRenderTable()}
    </>
  );
};

export default AddBill;
