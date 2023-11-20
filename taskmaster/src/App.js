// App.js


/* Found Bugs:
    
*/
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Task from './Task';
import DashBoard from './DashBoard';
import Axios from 'axios';

const App = ({loginUserID}) => {
  const [tasks, setTasks] = useState([
    /*{ title: "Task Example",
      description:["Concise Task Description Here!", "Also, look!",
                   "You can have multiple lines!", "Isn't that cool?!"],
      dueDate: (new Date().toISOString().substring(0,10)) }
    */
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  useEffect(() => { // Get Stored Tasks on boot up
    syncTaskList();
  }, []);


  function syncTaskList(){
    Axios.post("http://localhost:3001/tasks", {
      userID: loginUserID // TBC Add in Log in system
    }).then((response) => {
      setTasks(response.data);
    });
  }

  // adding a task
  const handleAddTask = (newTask) => {
    Axios.post("http://localhost:3001/create", {
      //taskID: task.taskID,  // handled by server
      title: newTask.title,
      description: newTask.description,
      dueDate: newTask.dueDate,
      userID: loginUserID // HARDCODED here: TBC; add login system
    }).then(() => {
      setTasks([...tasks, newTask]);
      //console.log(newTask);
      console.log("successfully stored new task"); // Only add task on Front End if Back End works!
      // Avoids having to syncTaskList
    });
  };

  const handleTaskClick = (taskID) => {
    // Find and select the clicked task
    const task = tasks.find((t) => t.taskID === taskID);
    setSelectedTask(task);
  };

  const handleEditTask = (editedTask) => {
    // Update the task and clear the selection
    Axios.post("http://localhost:3001/update", {
      taskID: editedTask.taskID,
      newTitle: editedTask.title,
      newDescription: editedTask.description,
      newDueDate: editedTask.dueDate
    }).then(() => {
      console.log("successfully edited task");
      setSelectedTask(null);
      syncTaskList();
    });
    
  };

  const handleDeleteTask = (taskID) => {
    // Delete the task and clear the selection

    Axios.post("http://localhost:3001/delete", {
      taskID: taskID
    }).then(() => {
      console.log("successfully deleted task");
      setTasks(tasks.filter((task) => task.taskID !== taskID));
      setSelectedTask(null);
    });
  };



  return (
    <div>
      <DashBoard />
      <h1>TaskMaster</h1>
      <TaskForm onTaskAdd={handleAddTask} />
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
      
      {selectedTask && (
        <Task task={selectedTask} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      )}
    </div>
  );
};

export default App;
