import React, { useState } from "react";

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSE = [
    {
      id: "e1",
      title: "Car Insurance 1",
      amount: 295.96,
      date: new Date(2022, 4, 5),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 295.96,
      date: new Date(2021, 4, 5),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 295.96,
      date: new Date(2020, 2, 5),
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 295.96,
      date: new Date(2020, 3, 5),
    },
  ];
  const [expense, setexpensew] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    console.log("In the App.js ");
    setexpensew((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expense} />
    </>
  );
}
export default App;
