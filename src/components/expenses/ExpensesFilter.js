import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [yearSelected, setYearSelected] = useState("");

  const selectHandler = (e) => {
    setYearSelected(e.target.value);
    const year = e.target.value;
    props.onChangeYear(year);
  };

  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
