import React from 'react'
import {FaTimes} from "react-icons/fa"
function Task({task, deleteTask, toggleDone, id}) {
  return (
    <div className={`task ${task.isDone ? "done" : ""}`} onDoubleClick={() => toggleDone(task.id)}>
        <h3><h1>{task.id}</h1>{task.text} <FaTimes onClick={() => deleteTask(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task