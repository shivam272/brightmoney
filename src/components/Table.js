import React from "react";
import "../App.css";
import { renderDropList, categoryOptions } from "../config/constant";

const Table = (props) => {
  const maxValue = props.data
    .map((el) => el.value)
    .sort((a, b) => Number(b) - Number(a))[0];

  const shouldPayBanner = (value) => {
    if (value === maxValue && props.budgetNegative) {
      return <span className="banner">Need to be Paid</span>;
    } else {
      return null;
    }
  };

  const getFilteredList = (category) => {
    props.getFilteredList(category);
  };

  const getAllBills = () => {
    props.getAllBills();
  };

  const deleteBill = (id) => {
    props.deleteBill(id);
    if (props.filteredListRequested) {
      props.getFilteredList(props.currentCategoryFilter);
    }
  };

  const getGraph = () => {
    props.getGraph();
  };

  return (
    <div className="container clearfix">
      <div className="income">
        <div className="table_header">
          <div>
            <button className="button" onClick={getAllBills}>
              Get All Bills
            </button>
            <button className="button" onClick={getGraph}>
              Get Graph
            </button>
          </div>

          <h2 className="icome__title">List of Bills</h2>
          <div>
            <label>Filter by Category : </label>
            <select
              type="text"
              className="add__category"
              placeholder="Select category"
              value={props.currentCategoryFilter}
              onChange={(event) => getFilteredList(event.target.value)}
            >
              {renderDropList([...categoryOptions, "All"])}
            </select>
          </div>
        </div>
        <div className="income__list">
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Date</th>
                <th style={{ width: "35%" }}>Description</th>
                <th style={{ width: "35%" }}>Category</th>
                <th style={{ width: "10%" }}>Value</th>
                <th style={{ width: "5%" }}>Edit</th>
                <th style={{ width: "5%" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((el) => (
                <tr key={el.id}>
                  <td>{el.date}</td>
                  <td>
                    {el.desc} {shouldPayBanner(el.value)}
                  </td>
                  <td>{el.category}</td>
                  <td>&#x20B9; {el.value}</td>
                  <td className="icon">
                    <i
                      className="ion-ios-keypad"
                      onClick={() => props.editBill(el.id)}
                    ></i>
                  </td>
                  <td className="icon">
                    <i
                      className="ion-ios-close-outline"
                      onClick={() => deleteBill(el.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
