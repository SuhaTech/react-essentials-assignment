import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

    setTask("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;