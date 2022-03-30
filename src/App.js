import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [ide, setIde] = useState(4)
  const [showbar, setShowbar] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  //DELETE TASK
  const deleteTask = (id) => {
    const NewTask = tasks.filter((item) => item.id !== id);
    setTasks(NewTask);
  };

  //ADD TASK
  const addTask = (newTask) => {
    setIde(ide + 1)
    const id = ide
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  //Toggle Done
  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  //Toggle Show

  const toggleShow = () => {
    setShowbar(!showbar);
  };

  //Delete ALL Items

  const deleteItems = () => {
    setTasks([]);
  };

  return (
    <div className="container">
      <Header title="TASK TRACKER" toggleShow={toggleShow} showbar={showbar} />
      {showbar && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteItems = {deleteItems} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h1 className="empty">Emty List</h1>
      )}
    </div>
  );
}

export default App;
