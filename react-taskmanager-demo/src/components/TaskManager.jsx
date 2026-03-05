import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import TaskItem from "./TaskItem"
import TaskList from "./TaskList"


function TaskManager() {
    let [tasks, setTasks] = useState([])

     const addNewTask = (taskObj) => {
        taskObj.completed = false   
        setTasks([...tasks, taskObj])
    }
        const deleteTask = (indexValue) => {
        let filterTasks = tasks.filter((_, index) => index !== indexValue)
        setTasks(filterTasks)
    }

      const completeTask = (indexValue) => {
          const updatedTasks = tasks.map((task, index) =>
         index === indexValue
      ? { ...task, completed: !task.completed } 
      : task
  );
  setTasks(updatedTasks);
    }

    const completedCount = tasks.filter(task => task.completed).length;

    return(
        
        <div className="max-w-xl mx-auto p-6 ">
            

            <h1 className="text-3xl text-center font-bold mb-4 ">
                Task Manager
            </h1>

         

            <p className="text-center mb-4">
                Total: {tasks.length} | Completed: {completedCount}
            </p>

            <AddTaskForm addNewTask={addNewTask} />

            <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            completeTask={completeTask}
        />
        </div>
  )
}

export default TaskManager