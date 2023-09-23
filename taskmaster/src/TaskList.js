import React from 'react';
import Task from './Task.js';
function TaskList(){
    const tasks = [
    {taskName: 'Code', taskDesc: ['HTML','JavaScript'], taskDate: new Date('2023-09-23T03:24:00')},
    {taskName: 'Code2', taskDesc: ['HTML2','JavaScript2'], taskDate: new Date('2024-09-23T03:24:00')}
    ]
    return(
    <div>
        {tasks.map((tl) => (
        <Task taskName = {tl.taskName} taskDesc = {tl.taskDesc} taskDate = {tl.taskDate} />
        ))}
    </div>
    )
}
    /*
    <div>
        <h2>Name: {tasks[i].taskName}</h2>
        <p>
            <ul> {tasks[i].taskDesc.map((t) => (
                <li>{t}</li>
                ))}
            </ul>
        </p>
        <p>
        {tasks[i].taskDate.toDateString()}
        </p>
    </div>
    )
}*/
export default TaskList;