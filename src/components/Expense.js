import "./Expense.css";

import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import React from "react";

function Expense() {
  const expense = [
    {
      id: "e1",
      title: "Car Insurance 1",
      amount: 295.96,
      date: Date(2022, 4, 5),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 295.96,
      date: Date(2021, 4, 5),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 295.96,
      date: Date(2020, 2, 5),
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 295.96,
      date: Date(2019, 3, 5),
    },
  ];
  return (
    <Card className="expense">
      <h2> Hello </h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </Card>
  );
}

export default Expense;
