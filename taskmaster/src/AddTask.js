import React from 'react';
import Task from './Task.js';
import TaskList from './TaskList.js';
function AddTask({newTask, tasks, setNewTaskls}){
    const addTask = () => {
        if (tasks.length > 0)
            newTask.id = tasks[tasks.length - 1].id + 1
        else
            newTask.id = 0
        const newTaskls = [...tasks, newTask,]
        setNewTaskls(newTaskls)
    }
    return(
        <button onClick={addTask}>Add Task</button>
    )
}
export default AddTask;