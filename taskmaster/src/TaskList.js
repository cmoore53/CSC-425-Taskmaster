   // TaskList.js

   import React from 'react';
   import './App.css';

   const TaskList = ({ tasks, onTaskClick }) => (
    <div class="TaskListDiv">
    <ul>
        {tasks.map((task) => (
            <li key={task.id} onClick={() => onTaskClick(task.id)}>
                {task.title} - {task.completed ? 'Completed' : 'Pending'}
            </li>
        ))}
    </ul>
    </div>
   );

   export default TaskList;