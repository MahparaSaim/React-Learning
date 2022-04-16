import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import React from "react";

function NewExpense(props) {
  const saveExpenseHandler = (setEnteredDate) => {
    const expenseData = {
      ...setEnteredDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
