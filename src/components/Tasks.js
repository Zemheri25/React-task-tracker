import React from 'react'
import Task from './Task'


function Tasks({tasks, deleteTask, toggleDone, deleteItems}) {
  return (
    <div>
        {
            tasks.map((task) => {
                return <Task task = {task} key = {task.id} deleteTask = {deleteTask} toggleDone = {toggleDone} />
            })

        }

        <button onClick={deleteItems} className='btn' style={{backgroundColor : "red"}}>Delete all</button>
            
    </div>
  )
}

export default Tasks