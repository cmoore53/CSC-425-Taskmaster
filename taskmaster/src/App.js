import logo from './logo.svg';
import './App.css';
import Task from './Task.js';
import TaskList from './TaskList.js';
import AddTask from './AddTask.js';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import DashBoard from "./Dashboard";

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

    const [taskls, setTaskls] = useState(testTaskList)

    const addTask = (newTask) => {
        setTaskls(newTask)
    }

    function editTask(id, newName, newDesc, newDate) {
      const newTaskls = taskls.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          
          return { ...task, 
                      taskName: newName,
                      taskDesc: newDesc,
                      taskDate: newDate 
                    };
        }
        return task;
      });
      setTaskls(newTaskls);
    }
    
    /*
    const deleteTask = (id) => {
      const newTaskls = taskls.filter(task => task.id !== id);
      setTaskls(newTaskls);
    }
    */
  return (
    <div>
        
      <DashBoard/>

      <TaskList tasks = {taskls} editTask = {editTask} /*deleteTask = {deleteTask}*//>

      <AddTask newTask = {testTask} tasks = {taskls} setNewTaskls = {addTask} />
    </div>
  );
};

export default App;
