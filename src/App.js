import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./styles.css"; // ✅ Import the boss-style CSS

function App() {
  // ✅ State to store expenses
  const [expenses, setExpenses] = useState([]);

  // ✅ Function to add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>💸EVERYDAY EXPENSE TRACKER💸 </h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
