import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "This is text",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "This is text2",
      day: "Feb 6th at 3:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "This is text6",
      day: "Feb 7th at 3:30pm",
      reminder: false,
    },
  ]);

  const [showTask, setShowTask] = useState(false);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleAddTask = () => {
    setShowTask(!showTask);
  };

  // toggle the reminder
  const toggleReminder = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].reminder = !tasks[index].reminder;
    setTasks([...tasks]);
  };

  return (
    <div className="container">
      <Header
        onClick={toggleAddTask}
        showTask={showTask}
        title="Task Manager"
      />
      {showTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Tasks here</p>
      )}
    </div>
  );
}

export default App;
