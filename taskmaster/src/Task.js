// Task.js

import React, { useState } from 'react';

const Task = ({ task, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDueDate, setNewDueDate] = useState("");
    
    function startEdit(){
        //"Clear" Edit Fields
        /*
             onChange={(e) => setNew|InsertFieldHere|(e.target.value)}
             ... Above only updates on change, so if the below fields were truly "cleared" {aka set to ""}
             and the user only changed the Title of a task, 
             the title would change but all other fields would be deleted...
        */
        setNewTitle(task.title);
        //console.log(task.description)
        setNewDescription(task.description);
        setNewDueDate(task.dueDate);

        setIsEditing(true)
    }

    const handleEditTask = () => {
        if((task.title && task.description && task.dueDate)){ // Failed attempt at validity checking, does nothing
            onEdit({
                taskID: task.taskID,
                title: newTitle, 
                description: newDescription, 
                dueDate: newDueDate 
            });
            
            setNewTitle("");
            setNewDescription("");
            setNewDueDate("");
        
            setIsEditing(false)
        }
    }

    if(isEditing !== true){
        return(
            <div>
                <h3>{task.title}</h3>
                <ul>
                    {task.description.split("\n").map((descItem) => (
                        <li key = {descItem.taskID}>
                            {descItem}
                        </li>
                    ))}
                </ul>
                <p>Due Date: {new Date(task.dueDate).toLocaleDateString('en-US').substring(0,10)}</p>
                
                <button class="edit-button" onClick={(startEdit)}>EDIT</button>
                <button class="delete-button" onClick={() => onDelete(task.taskID)}>DELETE</button>
            </div>    
        )
        
    }else{
        console.log(new Date(task.dueDate).toISOString().substring(0,10));
        return(
            <div>
                {/*<form>*/}
                    <h3>
                        <label>
                            {/*Edit Task's Title:*/}
                            {/* {<br/>} */}
                            <input 
                                //id = "newTitleInput"
                                //name = "newTitleInput"
                                type = "text"
                                maxLength={45}

                                placeholder = {task.title}
                                defaultValue={task.title}
                                //value = {newTitle}

                                onChange={(e) => setNewTitle(e.target.value)}
                            />  
                        </label>  
                    </h3>
                    <p>
                        <label>
                            {/* Edit Task's Description: */}
                            {/* <br/> */}
                            <textarea 
                            //id = "newDescriptionInput"
                            //name = "newDescriptionInput"
                            maxLength={900}

                            rows = {10}
                            cols = {30}

                            placeholder = {task.description}
                            defaultValue={task.description}
                            //value = {newDescription}

                            onChange={(e) => setNewDescription(e.target.value)}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            {/* Edit Task's Associated Date: */}
                            {/* <br/> */}
                            <input
                                //id = "newDueDateInput"
                                //name = "newDueDateInput"
                                type="date"
                                    
                                placeholder="Due Date"
                                defaultValue={new Date(task.dueDate).toISOString().substring(0,10)}
                                //value={task.dueDate}

                                onChange={(e) => setNewDueDate(new Date(e.target.value).toISOString().substring(0,10))}
                            />
                        </label>
                    </p>
                    
                    <button onClick={handleEditTask}>SAVE EDIT</button>
                    <button onClick={() => setIsEditing(false)}>CANCEL</button>
                {/*</form>*/}
            </div>    
        )
    }
};

export default Task;