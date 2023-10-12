import React from 'react';
import Task from './Task.js';
function TaskList({tasks, editTask, deleteTask}){

    return(
        <div>
            <h1>List of Tasks:</h1>
            <ul>
                {tasks.map((task) => (
                    <li key = {task.id}>
                        <Task 
                            key = {task.id}
                            id = {task.id} 

                            taskName = {task.taskName} 
                            taskDesc = {task.taskDesc} 
                            taskDate = {task.taskDate} 
                            
                            editTask = {editTask}
                            deleteTask = {deleteTask}
                        /> 
                    </li> 
                ))}
            </ul>
        </div>
    )
}
export default TaskList;