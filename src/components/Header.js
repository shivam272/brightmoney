import React from "react";
import "../App.css";
import { thisMonthIncome, getDateMonthHeader } from "../config/constant";

const Header = (props) => {
  const { currentMonth, currentYear } = getDateMonthHeader();
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">{`${currentMonth} ${currentYear}`}</span>
          :
        </div>

        <div className="budget__value">&#x20B9; {props.budget}</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">{`Income in ${currentMonth}`}</div>
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
