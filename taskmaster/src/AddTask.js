import React from 'react';
import Task from './Task.js';
import TaskList from './TaskList.js';
function AddTask({taskls, setTaskls}){
    const addTask = () => {
        const newTask = [...taskls, newTask]
        setTaskls(newTask)
    }
    return(
        <button onClick={addTask}>Add Task</button>
    )
}
export default AddTask;