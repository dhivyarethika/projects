import React from "react";

function ExpenseList({ expenses }) {
  return (
    <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index} className="expense-item">
          <span>💰 {expense.description} - ₹{expense.amount}</span>
          <button className="delete-btn">X</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
