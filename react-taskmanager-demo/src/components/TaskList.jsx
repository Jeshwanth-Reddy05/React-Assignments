import TaskItem from "./TaskItem"

function TaskList({ tasks, deleteTask, completeTask }) {

  if (tasks.length === 0) {
    return <p className="text-center">No Tasks Available</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((taskObj, index) => (
        <TaskItem
          key={index}
          taskObj={taskObj}
          index={index}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}   

export default TaskList