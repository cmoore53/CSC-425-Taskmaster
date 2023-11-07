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
        if(Array.isArray(newDescription)){ // newDescription is Array
            onEdit({
                taskID: task.taskID,
                title: newTitle, 
                description: newDescription, 
                dueDate: newDueDate });
        }else{ // newDescription is String
            onEdit({
                taskID: task.taskID,
                title: newTitle, 
                description: newDescription.split("\n"), 
                dueDate: newDueDate });
        }
        
        setNewTitle("");
        setNewDescription("");
        setNewDueDate("");
    
        setIsEditing(false)
    }

    if(isEditing !== true){
        if(Array.isArray(task.description)){ // task.description is ARRAY
            return(
                <div>
                <h3>{task.title}</h3>
                <ul>
                    {task.description.map((descItem) => (
                        <li key = {descItem.taskID}>
                            {descItem}
                        </li>
                    ))}
                </ul>
                <p>Due Date: {task.dueDate.substring(0, 10)}</p>
                
                <button onClick={(startEdit)}>EDIT</button>
                <button onClick={() => onDelete(task.taskID)}>DELETE</button>
                </div>    
            )
        }else{
            return(
                <div>
                <h3>{task.title}</h3>
                <ul>
                    {task.description.split("/n").map((descItem) => (
                        <li key = {descItem.taskID}>
                            {descItem}
                        </li>
                    ))}
                </ul>
                <p>Due Date: {task.dueDate.substring(0, 10)}</p>
                
                <button onClick={(startEdit)}>EDIT</button>
                <button onClick={() => onDelete(task.taskID)}>DELETE</button>
                </div>    
            )
        }
    }else{
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
                            rows = {10}
                            cols = {30}

                            placeholder = {task.description}
                            defaultValue={task.description/*.join("\n")*/} // Array to String
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
                                defaultValue={task.dueDate}
                                //value={task.dueDate}

                                onChange={(e) => setNewDueDate(e.target.value)}
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