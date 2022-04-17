import "./Expense.css";

import Card from "../UI/Card";
import ExpenseItem from "../Expense/ExpenseItem";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
      const [filterYear, setFilterYear] = useState('2020');

  const filerChangeHander = (selectYear) => {
    console.log('Expenses jS')
    setFilterYear(selectYear);
  }
  return (
    <div>
      <Card className="expense">
        <ExpensesFilter selected={filterYear} onFilterChange={filerChangeHander} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
