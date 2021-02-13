import React from "react";
import { connect } from "react-redux";
import { saveChanges, cancelChanges } from "../redux/actioncreator";
import { categoryOptions, renderDropList } from "../config/constant";
import "../App.css";

const Modal = (props) => {
  const { selectedBill } = props;
  const [desc, setDesc] = React.useState(selectedBill.desc);
  const [category, setCategory] = React.useState(selectedBill.category);
  const [value, setValue] = React.useState(selectedBill.value);
  const [date, setDate] = React.useState(selectedBill.date);

  const saveChanges = () => {
    const { id } = selectedBill;
    const newConfig = { desc, category, value, date };
    props.saveChanges(id, newConfig);
    if (props.filteredListRequested) {
      props.getFilteredList(props.currentCategoryFilter);
    }
  };

  const cancelChanges = () => {
    props.cancelChanges();
  };

  return (
    <div className="modal">
      <div className="modal__container">
        <input
          type="date"
          value={date}
          className="add__date"
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="text"
          value={desc}
          className="add__description"
          onChange={(event) => setDesc(event.target.value)}
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
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div>
          <button className="add__btn" onClick={saveChanges}>
            <i className="ion-ios-checkmark-outline"></i>
          </button>
          <button className="add__btn" onClick={cancelChanges}>
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedBill: state.bills.selectedBill,
    data:'shivam'
  };
};

const mapActionToProps = (dispatch) => {
  return {
    saveChanges: (id, newConfig) => {
      dispatch(saveChanges(id, newConfig));
    },
    cancelChanges: () => {
      dispatch(cancelChanges());
    },
  };
};

export default connect(mapStateToProps, mapActionToProps)(Modal);
