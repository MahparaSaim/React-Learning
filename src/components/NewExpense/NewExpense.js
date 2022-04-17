import "./NewExpense.css";

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseHandler = (setEnteredDate) => {
    const expenseData = {
      ...setEnteredDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const [isEditing, setIsEditing] = useState(false);
  const startEiditingHandler = () => {
    setIsEditing(true);
  };
  const stopEiditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEiditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEiditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
