function TaskItem({ taskObj, index, deleteTask ,completeTask }) {
  return (
    <div className="flex justify-between items-center border p-3 rounded">

      <div>
        <p
          className={
            taskObj.completed
              ? " text-green-500"
             :""
          }
        >
          {taskObj.title}
        </p>
          <p className="text-sm">
          Priority: {taskObj.priority}
        </p>
      </div>

        <div className="flex gap-2">

        <button
          onClick={() => completeTask(index)}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          {taskObj.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(index)}
          className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>

      </div>

      

    </div>
  );
}

export default TaskItem;