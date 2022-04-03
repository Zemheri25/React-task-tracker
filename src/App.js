import "./App.css";
import Header from "./components/Header";
import { useState,useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [ide, setIde] = useState(4)
  const [showbar, setShowbar] = useState(false);
  const [tasks, setTasks] = useState([]);
 

  const baseUrl = "http://localhost:5000/tasks";

  //CRUD Create Read Update Delete

  const getApi = async () => {
    const response = await axios(baseUrl);
    setTasks(response.data)
  }

  useEffect(() => {
    getApi();
  }, [])



  //DELETE TASK
  // const deleteTask = (id) => {
  //   const NewTask = tasks.filter((item) => item.id !== id);
  //   setTasks(NewTask);
  // };


  const deleteTask = async (id) => {
    const newTasks = await axios({
      method : "DELETE",
      url : `${baseUrl}/${id}`
    });
    getApi();
  }



  //ADD TASK
  // const addTask = (newTask) => {
  //   setIde(ide + 1)
  //   const id = ide
  //   const addNewTask = { id, ...newTask };
  //   setTasks([...tasks, addNewTask]);
  // };


  const addTask = async (NewTask) => {
    const response = await axios({
      url : baseUrl,
      method : "POST",
      data : NewTask
    });
    getApi();
  }


  //Toggle Done
  // const toggleDone = (toggleDoneId) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
  //     )
  //   );
  // };

  const toggleDone = async (toggleDoneId) => {
    const {data} = await axios(`${baseUrl}/${toggleDoneId}`);
    console.log(data);
    const updatedTask = {...data, isDone : !data.isDone};
    const response = await axios({
      url : `${baseUrl}/${toggleDoneId}`,
      method : "PUT",
      data : updatedTask
    });
    getApi();
  }




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
