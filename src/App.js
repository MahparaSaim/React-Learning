import "./App.css";

import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      date: Date(2022, 4, 5),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 295.96,
      date: Date(2022, 2, 5),
    },
    {
      id: "e4",
      title: "Car Insurance 4",
      amount: 295.96,
      date: Date(2022, 3, 5),
    },
  ];
  return (
    <div className="App">
      <h2> Hello </h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default App;
