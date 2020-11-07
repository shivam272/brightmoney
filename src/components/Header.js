import React from "react";
import "../App.css";
import { monthArray, thisMonthIncome } from "../config/constant";

const Header = (props) => {
  const getDateMonthHeader = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = monthArray[new Date().getMonth()];
    return `${currentMonth} ${currentYear}`;
  };

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">{getDateMonthHeader()}</span>:
        </div>

        <div className="budget__value">&#x20B9; {props.budget}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">{`Income in ${getDateMonthHeader()}`}</div>
          <div className="right">
            <div className="budget__income--value">
              &#x20B9; {thisMonthIncome}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
