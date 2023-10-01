import React from 'react';
import Task from './Task.js';
function TaskList({tasks}){
    return(
        <div>
            {tasks[0].map((tl) => (
            <Task taskName = {tl.taskName} taskDesc = {tl.taskDesc} taskDate = {tl.taskDate} />
            ))}
        </div>
    )
}
export default TaskList;