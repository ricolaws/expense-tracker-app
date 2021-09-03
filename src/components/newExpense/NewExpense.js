import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let [formState, setFormState] = useState(false);

  function openFormHandler(e) {
    setFormState(true);
  }

  function closeFormHandler(e) {
    setFormState(false);
  }

  return (
    <Card className="new-expense">
      {!formState && (
        <button
          className="add-new-expense"
          type="button"
          onClick={openFormHandler}
        >
          Add New Expense
        </button>
      )}
      {formState && (
        <ExpenseForm
          onAddExpenseData={addExpenseDataHandler}
          onCloseForm={closeFormHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
