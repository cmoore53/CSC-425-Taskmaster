import React from 'react';
import Task from './Task.js';
function TaskList({tasks, editTask}){
    return(
        <div>
            {tasks.map((tl) => (
            <div>
                <Task 
                taskName = {tl.taskName} 
                taskDesc = {tl.taskDesc} 
                taskDate = {tl.taskDate} 
                
                editTask = {editTask}/>
            </div>
            
            ))}
        </div>
    )
}
export default TaskList;