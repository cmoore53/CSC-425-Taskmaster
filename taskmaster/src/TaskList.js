import React from 'react';
import Task from './Task.js';
function TaskList({tasks, editTask}){

    return(
        <div>
            <h1>List of Tasks:</h1>
            <ul>
                {tasks.map((task) => (
                <Task 
                    key={task.id}
                    id = {task.id} 
                    
                    taskName = {task.taskName} 
                    taskDesc = {task.taskDesc} 
                    taskDate = {task.taskDate} 
                    
                    editTask = {editTask}/>  
                ))}
            </ul>
        </div>
    )
}
export default TaskList;