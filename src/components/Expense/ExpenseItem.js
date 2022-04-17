import "./ExpenseItem.css";

import React, { useState } from "react";

import Card from "../UI//Card";
import ExpenseDate from "../Expense/ExpenseDate";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle('Updated')
  //   console.log("Clicke Handler");
  // };
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate date={props.date} />
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          {/* <button onClick={clickHandler}>Chhange Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
