import { useState } from "react";
import "./App.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Filters from "./components/Filters";

import useExpenses from "./hooks/useExpenses";

function App() {
  const {
    expenses,
    addExpense,
    deleteExpense,
  } = useExpenses();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [sortBy, setSortBy] = useState("date-desc");

  // Filter expenses
  let filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      expense.category === categoryFilter;

    const matchesStartDate =
      !startDate || expense.date >= startDate;

    const matchesEndDate =
      !endDate || expense.date <= endDate;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStartDate &&
      matchesEndDate
    );
  });

  // Sort expenses
  filteredExpenses = [...filteredExpenses].sort(
    (a, b) => {
      switch (sortBy) {
        case "date-asc":
          return a.date.localeCompare(b.date);

        case "date-desc":
          return b.date.localeCompare(a.date);

        case "amount-asc":
          return a.amount - b.amount;

        case "amount-desc":
          return b.amount - a.amount;

        case "category":
          return a.category.localeCompare(b.category);

        default:
          return 0;
      }
    }
  );

  return (
    <div className="app">

      <header className="header">
        <h1>Personal Expense Tracker</h1>
        <p>Track and manage your daily expenses</p>
      </header>

      <main className="container">

        <Summary
  expenses={expenses}
  filteredExpenses={filteredExpenses}
/>

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <section className="content-section">

          <ExpenseForm
            onAddExpense={addExpense}
          />

          <ExpenseList
            expenses={filteredExpenses}
            onDeleteExpense={deleteExpense}
          />

        </section>

      </main>

    </div>
  );
}

export default App;