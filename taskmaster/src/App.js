// App.js


/* Found Bugs:
    Date from retrieved data is weird... NOT truncated
*/
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Task from './Task';
import DashBoard from './DashBoard';
import Axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([
    /*{ title: "Task Example",
      description:["Concise Task Description Here!", "Also, look!",
                   "You can have multiple lines!", "Isn't that cool?!"],
      dueDate: (new Date().toISOString().substring(0,10)) }
    */
  ]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => { // Get Stored Tasks on boot up
    Axios.get("http://localhost:3001/tasks", {
      userID: 1 // TBC Add in Log in system
    }).then((response) => {
      /*console.log(response);
      response.data.forEach(element => {
        console.log(element);

        const task = {
          taskID: element.taskID,
          title: element.title,
          description: element.description.split("\n"),
          dueDate: element.dueDate
        }
        
        setTasks(...tasks, task);
      });
      console.log("Tasks:")
      console.log(tasks);
      //setTasks(response.data);
      */
     setTasks(response.data);
    });
    
  }, []);

  const handleAddTask = (newTask) => {
    // Create a new task with a unique ID 
    const task = { ...newTask, /*id: tasks.length + 1*/};
    // Front End [Local] ID, DIFFERS from server ID / DEPRECATED
    

    //console.log(task.title);
    //console.log(task.description.join("\n"));
    //console.log(task.dueDate);

    Axios.post("http://localhost:3001/create", {
      //taskID: task.id, 
      title: task.title,
      description: task.description.join("\n"),
      dueDate: task.dueDate,
      userID: 1 // HARDCODED here: TBC; add login system
    }).then(() => {
      console.log("successfully stored new task"); // Only add task on Front End if Back End works!
      task = {... task, ID: getTaskID(task)}
      setTasks([...tasks, task]);
    });
  };

  // TBC HERE?? need taskID to actually USE
  const getTaskID = (task) => {
    Axios.get("http://localhost:3001/tasks")
  };

  const handleTaskClick = (taskID) => {
    // Find and select the clicked task
    const task = tasks.find((t) => t.id === taskID);
    setSelectedTask(task);
  };

  const handleEditTask = (editedTask) => {
    // Update the task and clear the selection
    console.log(editedTask.description);
    Axios.post("http://localhost:3001/edit", {
      newTitle: editedTask.title,
      newDescription: editedTask.description.join("\n"),
      newDueDate: editedTask.dueDate
    }).then(() => {
      console.log("successfully edited task");
      //setTasks(tasks.map((task) => (task.id === editedTask.id ? editedTask : task)));
      setSelectedTask(null);
    });
    
  };

  const handleDeleteTask = (taskID) => {
    // Delete the task and clear the selection
    setTasks(tasks.filter((task) => task.ID !== taskID));
    setSelectedTask(null);
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
