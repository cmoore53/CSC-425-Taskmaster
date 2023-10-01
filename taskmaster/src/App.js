import logo from './logo.svg';
import './App.css';
import Task from './Task.js';
import TaskList from './TaskList.js';
import AddTask from './AddTask.js';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import DashBoard from "./DashBoard";

function App() {

    const testTask = {
    taskName: 'Code',
    taskDesc: ["JavaScript","Html"],
    taskDate: new Date("2023-09-23T03:24:00")
    };

    let testTaskList = [
    {id:1, taskName: 'Code', taskDesc: ['HTML','JavaScript'], taskDate: new Date('2023-09-23T03:24:00')},
    {id:2, taskName: 'Code2', taskDesc: ['HTML2','JavaScript2'], taskDate: new Date('2023-09-24T03:24:00')}
    ]

    const [taskls, setTaskls] = useState([testTaskList])

    const addTask = (newTask) => {
        setTaskls(newTask)
    }
  return (
    <div>
        
        <DashBoard/>

        <TaskList tasks = {taskls} />

        {/*<AddTask newTask = {testTask} taskList = {taskls} setTask = {setTaskls} />*/}

    </div>
  );
}

export default App;
