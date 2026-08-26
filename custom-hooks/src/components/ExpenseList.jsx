import React from "react";

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="card">
        <h2>Expense List</h2>
        <p className="empty-message">No expenses added yet.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Expense List</h2>

      <div className="expense-list">
        {expenses.map((expense) => (
          <div className="expense-item" key={expense.id}>
            <div className="expense-details">
              <h3>{expense.title}</h3>

              <p>
                Category: <strong>{expense.category}</strong>
              </p>

              <p>Date: {expense.date}</p>
            </div>

            <div className="expense-actions">
              <span className="expense-amount">
                ₹{expense.amount}
              </span>

              <button
                className="delete-btn"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;