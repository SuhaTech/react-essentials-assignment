import React from "react";
import useForm from "../hooks/useForm";

function ExpenseForm({ onAddExpense }) {
  const { formData, handleChange, resetForm } = useForm({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, amount, category, date } = formData;

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    onAddExpense(newExpense);

    resetForm();
  };

  return (
    <div className="card">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit} className="expense-form">

        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            name="title"
            placeholder="Enter expense title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="add-btn">
          Add Expense
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;