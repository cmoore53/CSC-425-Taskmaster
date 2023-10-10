import React, { useState } from "react";
//('hello', ['world', '!'], new Date('1995-12-17T03:24:00'))
function Task(id, taskName, taskDesc, taskDate, editTask){

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newDate, setNewDate] = useState("");

    function deleteTask(){
        // Delete Task || Likely move to App.js, then pass to TaskList.js
    }
      
    if(isEditing !== true){
        return(
            <li>
                <div>
                    <h2> {taskName}</h2>
                    <p>
                        {taskDesc}
                    </p>
                    <p>
                        {taskDate}
                    </p>
                    <button onClick={() => setEditing(true)}>EDIT</button>
                    <button onClick={() => deleteTask()}>DELETE</button>
                </div>  
            </li>
        )
    }else{
        return(
            <li>
                <div>
                    <form>
                            {/* Title Input */}
                        <p>
                            <label>Title: 
                                <input 
                                    id = {id}
                                    name = "editedTitleInput"
                                    type = "text"
                                    defaultValue = {taskName}
                                    placeholder={taskName}

                                    onChange={(e) => setNewName(e.target.value)}
                                />
                            </label>
                        </p>
                        
                        {/* Description Input */}
                        <p>
                            <label>Description: 
                                <br />
                                <textarea 
                                    id = {id}
                                    name = "editedDescriptionInput"
                                    rows={3}
                                    cols={30}
                                    defaultValue = {taskDesc.join("\n")}
                                    placeholder={taskDesc.join("\n")}

                                    onChange={(e) => setNewDesc(e.target.value.split("\n"))}
                                />
                            </label>
                                
                            
                        </p>
                        
                        {/* Due Date Input */}
                        <label>Due Date: 
                                <input
                                    id = {id}
                                    name = "editedDueDate"
                                    type = "text"
                                    //taskDate.toString() works too...
                                    defaultValue = {taskDate.toDateString()}
                                    placeholder={taskDate.toDateString()}
                                    //defaultValue = {taskDate.toDateString()}
                                    //placeholder={taskDate.toDateString()}

                                    onChange={(e) => setNewDate(e.target.value)}
                                />
                        </label>
                        <br/>
                        <button onClick={() => editTask(id, newName, newDesc, newDate)}>SAVE</button>
                        <button onClick={() => setEditing(false)}>CANCEL</button>
                    </form>
                </div>
            </li>
        )
    }
}
export default Task;