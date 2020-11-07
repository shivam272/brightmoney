import React from "react";
import "../App.css";

const Table = (props) => {
  return (
    <div className="container clearfix">
      <div className="income">
        <h2 className="icome__title">Bills</h2>
        <div className="income__list">
          <table>
            <thead>
              <tr>
                <th style={{ width: "40%" }}>Category</th>
                <th style={{ width: "40%" }}>Description</th>
                <th style={{ width: "10%" }}>Value</th>
                <th style={{ width: "5%" }}>Edit</th>
                <th style={{ width: "5%" }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((el) => (
                <tr key={el.id}>
                  <td>{el.desc}</td>
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
                      onClick={() => props.deleteBill(el.id)}
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
