   // TaskList.js

   import React from 'react';

   const TaskList = ({ tasks, onTaskClick }) => (

    <ul>
        {tasks.map((task) => (
            <li key={task.taskID} onClick={() => onTaskClick(task.taskID)}>
                {task.title} - {task.completed ? 'Completed' : 'Pending'}
            </li>
        ))}
    </ul>
   );

   export default TaskList;