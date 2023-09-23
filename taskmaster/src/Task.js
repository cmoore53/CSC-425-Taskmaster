import React from 'react';
//('hello', ['world', '!'], new Date('1995-12-17T03:24:00'))
function Task(){
    const task = {
    taskName: 'Code',
    taskDesc: ['HTML','JavaScript'],
    taskDate: new Date('2023-09-23T03:24:00')
    }

    return(
    <div>
        <h2>Name: {task.taskName}</h2>
        <p>
            <ul>
                <li>{task.taskDesc[0]}</li>
            </ul>
        </p>
        <p>
        {task.taskDate.toDateString()}
        </p>
    </div>
    )
}
export default Task;