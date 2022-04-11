import "./ExpenseItem.css";

import Card from "../UI//Card";
import ExpenseDate from "../Expense/ExpenseDate";
import React,{useState} from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated')
    console.log("Clicke Handler");
  };
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Chhange Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
