import { useForm } from "react-hook-form"


function AddTaskForm({ addNewTask }) {
  const {register,handleSubmit,reset,formState: { errors },} = useForm();

  const onSubmit = (data) => {
    addNewTask(data);
    reset();
  };

 return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col  gap-3 mb-6"
    >

  
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded"
        {...register("title", {
          required: "Title is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required"
          }
        })}
      />
      {errors.title && (
        <p className="text-red-500 text-sm">
          {errors.title.message}
        </p>
      )}

      <select
        className="border p-2 rounded"
        {...register("priority", {
          required: "Priority is required"
        })}
      >
        <option value="">Select Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      {errors.priority && (
        <p className="text-red-500 text-sm">
          {errors.priority.message}
        </p>
      )}

      <button className="bg-amber-300 text-white p-2 rounded">
        Add Task
      </button>

    </form>
  );
}


export default AddTaskForm