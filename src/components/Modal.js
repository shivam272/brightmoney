import React from "react";
import { connect } from "react-redux";
import "../App.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <input
          type="text"
          // value={desc}
          className="add__description"
          placeholder="Add description"
          // onChange={(event) => setDesc(event.target.value)}
        />
        <input
          type="text"
          className="add__category"
          placeholder="Add category"
          // value={category}
          // onChange={(event) => setCategory(event.target.value)}
        />
        <input
          type="number"
          className="add__value"
          placeholder="Value"
          // value={value}
          // onChange={(event) => setValue(event.target.value)}
        />
        <div>
          <button className="add__btn">
            <i className="ion-ios-checkmark-outline"></i>
          </button>
          <button className="add__btn">
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapActionToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapActionToProps)(Modal);
