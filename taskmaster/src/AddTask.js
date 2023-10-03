import React from 'react';
import Task from './Task.js';
import TaskList from './TaskList.js';
function AddTask({newTask, tasks, setNewTaskls}){
    const addTask = () => {
        const newTaskls = [...tasks, newTask]
        setNewTaskls(newTaskls)
    }
    return(
        <button onClick={addTask}>Add Task</button>
    )
}
export default AddTask;