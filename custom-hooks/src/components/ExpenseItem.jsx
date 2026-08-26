import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <h3>Pizza</h3>
        <p>Food</p>
        <small>09 July 2026</small>
      </div>

      <div className="expense-amount">
        ₹250
      </div>

      <div className="expense-actions">
        <button className="paid-btn">
          <FaCheckCircle />
        </button>

        <button className="edit-btn">
          <FaEdit />
        </button>

        <button className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;