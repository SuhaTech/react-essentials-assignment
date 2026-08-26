import React from "react";

function Summary({ expenses, filteredExpenses }) {
  // Total spending of all expenses
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Total spending of filtered expenses
  const filteredAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  // Current month
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Current month expenses
  const monthlyExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  const monthlyAmount = monthlyExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <section className="summary-section">

      {/* Total Spending */}
      <div className="summary-card">
        <h3>Total Spending</h3>
        <p>₹{totalAmount}</p>
      </div>

      {/* Total Records */}
      <div className="summary-card">
        <h3>Total Records</h3>
        <p>{expenses.length}</p>
      </div>

      {/* Monthly Spending */}
      <div className="summary-card">
        <h3>This Month</h3>
        <p>₹{monthlyAmount}</p>
      </div>

      {/* Filtered Spending */}
      <div className="summary-card">
        <h3>Filtered Spending</h3>
        <p>₹{filteredAmount}</p>
      </div>

    </section>
  );
}

export default Summary;