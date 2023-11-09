   // TaskList.js

   import React from 'react';

   const TaskList = ({ tasks, onTaskClick }) => (

    <ul>
        {tasks.map((task) => (
            <li key={task.taskID} onClick={() => onTaskClick(task.taskID)}>
                {task.title} - {"[" + new Date(task.dueDate).toLocaleDateString('en-US').substring(0,10) + "]"}
            </li>
        ))}
    </ul>
   );

   export default TaskList;