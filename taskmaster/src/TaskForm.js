// TaskForm.js

import React, { useState } from 'react';
import './App.css';

const TaskForm = ({ onTaskAdd }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(new Date());

    const handleAddTask = () => {
        // Validate and add task
        if (title && description && dueDate) {
            //console.log(description)
            onTaskAdd({ title, description, dueDate });

            setTitle("");
            setDescription("");
            setDueDate("");
        }
    };



    return (
        <div>
            <input class="text-title"
            type="text"
            maxLength={45}

            placeholder=" Title"
            value={title}

            onChange={(e) => setTitle(e.target.value)}
            />

            <br/>
            <textarea class="text-area"
            rows={10}
            cols={30}
            maxLength={900}

            placeholder=" Description"
            value={description}

            onChange={(e) => setDescription(e.target.value)}
            />

            <br/>
            <input class="date-box"
            type="date"


            placeholder="Due Date"
            value={dueDate}

            onChange={(e) => setDueDate(e.target.value)}
            />
				<button class="add-button" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};


export default TaskForm;