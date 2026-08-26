import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.text);

  const saveTask = () => {
    if (updatedTask.trim() === "") return;

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: updatedTask,
      },
    });

    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          dispatch({
            type: "TOGGLE_TASK",
            payload: task.id,
          })
        }
      />

      {isEditing ? (
        <input
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="actions">
        {isEditing ? (
          <button onClick={saveTask}>
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;