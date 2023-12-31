// TaskList.js

import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import EditTaskButton from './EditTaskButton';
import './TaskList.css';

const TaskList = ({ tasks, onTaskClick, onDelete, onEdite }) => {
    /*
    <ul>
        {tasks.map((task) => (
            <li key={task.taskID} onClick={() => onTaskClick(task.taskID)}>
                {task.title} - {"[" + new Date(task.dueDate).toLocaleDateString('en-US').substring(0,10) + "]"}
            </li>
        ))}
    </ul>
    */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAccordionSelect = (newActiveKey) => {
        if (!isModalOpen) {
            // Only update the active key if the modal is not open
            setActiveKey(newActiveKey);
        }
    };

    return (
        <Accordion activeKey={activeKey} onSelect={handleAccordionSelect} disabled={isModalOpen}>
            {tasks.map((task) => (
                <Accordion.Item eventKey={task.taskID} onClick={() => onTaskClick(task.taskID)}>
                    <Accordion.Header>
                        <h3>{task.title} - {"[" + new Date(task.dueDate).toLocaleDateString('en-US').substring(0, 10) + "]"}</h3>
                        <Button className="delete-button" varient="primary" onClick={() => onDelete(task.taskID)}>Finished</Button>
                        <EditTaskButton selectedTask={task} onEdit={onEdite} onModalOpen={handleModalOpen} />
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {task.description.split("\n").map((descItem) => (
                                <li key={descItem.taskID}>
                                    {descItem}
                                </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
};

export default TaskList;