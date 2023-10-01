import React from 'react';
//('hello', ['world', '!'], new Date('1995-12-17T03:24:00'))
function Task({taskName,taskDesc,taskDate}){
    /*const task = {
    taskName: name, //'Code',
    taskDesc: desc, //['HTML','JavaScript'],
    taskDate: date //new Date('2023-09-23T03:24:00')
    }*/

    return(
    <div>
        <h2>Name: {taskName}</h2>
        <p>
            <ul> {taskDesc.map((t) => (
                <li>{t}</li>
                ))}
            </ul>
        </p>
        <p>
        {taskDate.toDateString()}
        </p>
    </div>
    )
}
export default Task;