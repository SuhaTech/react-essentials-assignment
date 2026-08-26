import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskSummary from "./components/TaskSummary";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";

function App() {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskInput />

      <TaskSummary />

      <TaskList />

      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_TASKS" })}
      >
        Clear All Tasks
      </button>
    </div>
  );
}

export default App;