import './App.css';
import Task from './Task.js';
import TaskList from './TaskList.js';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import DashBoard from "./DashBoard";

function App() {

    const testTask = {
    taskName: 'Code',
    taskDesc: ["JavaScript","Html"],
    taskDate: new Date("2023-09-23T03:24:00")
    };
    const testTaskList = [
    {key:1, taskName: 'Code', taskDesc: ['HTML','JavaScript'], taskDate: new Date('2023-09-23T03:24:00')},
    {key:2, taskName: 'Code2', taskDesc: ['HTML2','JavaScript2'], taskDate: new Date('2024-09-23T03:24:00')}
    ]

    /*No idea if this would work, will change later. This is an idea

    const [complete] = useState(0);
    const markComplete = () => {
        complete = true;
    };

    const markIncomplete = () => {
        complete = false;
    };

    const deleteTask = (task) => {
        setTask(tasks.filter((task) => task !== task));
    };
    */

  return (
    <div>

      <DashBoard/>

      <Task taskName = {testTask.taskName} taskDesc = {testTask.taskDesc} taskDate = {testTask.taskDate} />

      /*Idea for complete button: <button onCLick={() => {
                                    if (task = !complete) task.markComplete;
                                    else task.markIncomplete;
                                   }markComplete(task)}>X</button>

      Idea for delete button:     <button onClick={() => deleteTask(task)}>X</button>*/

      <TaskList tasks = {testTaskList} />
    </div>
  );
};

export default App;
