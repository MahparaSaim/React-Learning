import "./App.css";

import Expense from "./components/Expense/Expense";
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const addExpenseHandler = (expenses) => {
    console.log("In the App.js ");
    console.log(expenses);
  };
  return (
    <>
      <NewExpense onAddExpense={ addExpenseHandler}/>
      <Expense />
    </>
  );
}
export default App;
