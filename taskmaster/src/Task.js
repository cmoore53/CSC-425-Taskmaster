import React, { useState } from "react";
//('hello', ['world', '!'], new Date('1995-12-17T03:24:00'))
function Task(task){
    /*const task = {
    taskName: name, //'Code',
    taskDesc: desc, //['HTML','JavaScript'],
    taskDate: date //new Date('2023-09-23T03:24:00')
    }*/

        
        /*
            Possible modification? Edit Form => standalone .js?
        */

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newDate, setNewDate] = useState("");

    function deleteTask(){
        // Delete Task; remove from TaskList ??
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        setTask({
            ...task,
            taskName: newName,
            taskDesc: newDesc,
            taskDate: newDate
        });

        setNewName("");
        setNewDesc("");
        setNewDate("");

        setEditing(false);
      }
      
    if(isEditing != true){
        return(
            <div>
                <h2>Name: {task.taskName}</h2>
                <p>
                    <ul> {task.taskDesc.map((t) => (
                            <li>{t}</li>
                        ))}
                    </ul>
                </p>
                <p>
                    {task.taskDate.toDateString()}
                </p>
                <button onClick={() => setEditing(true)}>EDIT</button>
                <button onClick={() => deleteTask()}>DELETE</button>
            </div>
        )
    }else{
        return(
            <div>
                <form onSubmit={handleSubmit}>
                        {/* Title Input */}
                    <p>
                        <label>Title: 
                            <input 
                                id = "editedTitleInput"
                                name = "editedTitleInput"
                                type = "text"
                                defaultValue = {task.taskName}
                                placeholder={task.taskName}

                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </label>
                    </p>
                    
                    {/* Description Input */}
                    <p>
                        <label>Description: 
                            <br />
                            <textarea 
                                id = "editedDescriptionInput"
                                name = "editedDescriptionInput"
                                rows={3}
                                cols={30}
                                defaultValue = {task.taskDesc.join("\n")}
                                placeholder={task.taskDesc.join("\n")}

                                onChange={(e) => setNewDesc(e.target.value.split("\n"))}
                            />
                        </label>
                            
                        
                    </p>
                    
                    {/* Due Date Input */}
                    <label>Due Date: 
                            <input
                                id = "editedDueDate"
                                name = "editedDueDate"
                                type = "text"
                                //task.taskDate.toString() works too...
                                defaultValue = {task.taskDate.toDateString()}
                                placeholder={task.taskDate.toDateString()}
                                //defaultValue = {task.taskDate.toDateString()}
                                //placeholder={task.taskDate.toDateString()}

                                onChange={(e) => setNewDate(e.target.value)}
                            />
                    </label>
                    <br/>
                    <button type = "submit">SAVE</button>
                    <button onClick={() => setEditing(false)}>CANCEL</button>
                </form>
            </div>
        )
    }
}
export default Task;