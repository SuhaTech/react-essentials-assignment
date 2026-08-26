import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskSummary = () => {
  const { state } = useContext(TaskContext);

  const total = state.tasks.length;

  const completed = state.tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="summary">
      <h3>Task Summary</h3>

      <p>Total Tasks: {total}</p>

      <p>Completed Tasks: {completed}</p>
    </div>
  );
};

export default TaskSummary;