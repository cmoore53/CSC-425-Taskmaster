import logo from './logo.svg';
import './App.css';
import Task from './Task.js';
import TaskList from './TaskList.js';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {

    setCount(count + 1);

  };

  const handleDecrement = () => {

    setCount(count - 1);

  };
    const testTask = {
    taskName: 'Code',
    taskDesc: ["JavaScript","Html"],
    taskDate: new Date("2023-09-23T03:24:00")
    };
    const testTaskList = [
    {key:1, taskName: 'Code', taskDesc: ['HTML','JavaScript'], taskDate: new Date('2023-09-23T03:24:00')},
    {key:2, taskName: 'Code2', taskDesc: ['HTML2','JavaScript2'], taskDate: new Date('2024-09-23T03:24:00')}
    ]


  return (

    <div>

        <h1>My React App</h1>

        <p>Count: {count}</p>

        <button onClick={handleIncrement}>Increment</button>

        <button onClick={handleDecrement}>Decrement</button>



        <Task taskName = {testTask.taskName} taskDesc = {testTask.taskDesc} taskDate = {testTask.taskDate} />

        <TaskList tasks = {testTaskList} />



    </div>

  );
}

export default App;
