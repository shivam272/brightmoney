import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../App.css";
import { getDateMonthHeader } from "../config/constant";

const Graph = (props) => {
  const { currentMonth } = getDateMonthHeader();

  const createData = (data) => {
    const mainArray = [...data];
    let finalData = [];
    data.forEach((el) => {
      if (finalData.findIndex((inner) => inner.date === el.date) === -1) {
        const currentdate = new Date(el.date);
        const day = `${currentdate.getDate()}-${currentMonth}`;
        const amount = mainArray
          .filter((inner) => inner.date === el.date)
          .reduce((acc, el) => acc + Number(el.value), 0);
        finalData.push({ date: el.date, day, amount });
      }
    });

    return finalData.sort((a, b) => {
      const val1 = new Date(a.date);
      const val2 = new Date(b.date);
      return val1 - val2;
    });
  };

  const closeGraphModal = () => {
    props.closeGraph();
  };

  const graph = (
    <>
      <BarChart
        width={600}
        height={400}
        data={createData(props.data)}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </>
  );

  return (
    <div className="modal graph">
      <div className="modal__container">{graph}</div>
      <div style={{ textAlign: "center" }}>
        <button className="add__btn" onClick={closeGraphModal}>
          <i className="ion-ios-close-outline"></i>
        </button>
      </div>
    </div>
  );
};

export default Graph;
