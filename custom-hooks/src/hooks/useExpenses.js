import useLocalStorage from "./useLocalStorage";

function useExpenses() {
  const [expenses, setExpenses] = useLocalStorage(
    "expenses",
    []
  );

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      expense,
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  };

  return {
    expenses,
    addExpense,
    deleteExpense,
  };
}

export default useExpenses;