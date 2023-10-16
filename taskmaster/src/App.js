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
  taskName: 'TITLE',
  taskDesc: ["DESCRIPTION","GOES", "HERE"],
  taskDate: (new Date('2023-09-24T03:24:00').toISOString().substring(0,10))
  };

  let testTaskList = [
  {id:1, taskName: 'Code', taskDesc: ['HTML','JavaScript'], taskDate: (new Date('2023-09-23T03:24:00').toISOString().substring(0,10))},
  {id:2, taskName: 'Code2', taskDesc: ['HTML2','JavaScript2'], taskDate: (new Date('2023-09-24T03:24:00').toISOString().substring(0,10))}
  ]

  const [taskls, setTaskls] = useState(testTaskList)

  const addTask = (newTask) => {
      setTaskls(newTask)
  }

  const handleEditTask = (editedTask) => {
    // Update the task and clear the selection
    setTaskls(taskls.map((task) => (task.id === editedTask.id ? editedTask : task)));
  };

  const handleDeleteTask = (taskId) => {
    // Delete the task and clear the selection
    setTaskls(taskls.filter((task) => task.id !== taskId));
  };

  return (
    <div>
        
        <DashBoard/>
        <AddTask newTask = {testTask} tasks = {taskls} setNewTaskls = {addTask} />
        <TaskList tasks = {taskls} editTask = {handleEditTask} deleteTask = {handleDeleteTask} />

    </div>
  );
};

export default App;