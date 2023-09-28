import React from 'react';
import Task from './Task.js';
import TaskList from './TaskList.js';
function AddTask(props){
    {props.taskList.push(props.newTask)}
    {props.setTask(props.taskList)}
}
export default AddTask;