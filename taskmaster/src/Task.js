import React, { useState } from 'react';
//('hello', ['world', '!'], new Date('1995-12-17T03:24:00'))
//function Task({task, editTask, deleteTask}){
const Task = ( task, {/* editTask, deleteTask */}) => {
    
    /*const task = {
    taskName: name, //'Code',
    taskDesc: desc, //['HTML','JavaScript'],
    taskDate: date //new Date('2023-09-23T03:24:00')
    }*/

    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newDate, setNewDate] = useState("");

    function startEdit(){
        setNewName(task.taskName);
        setNewDesc(task.taskDesc);
        setNewDate(task.taskDate);

        setEditing(true)
    }

    const handleEdit = () => {
        // I don't understand why / how this worked
        // but it DID so I'm moving on

        // editTask doesn't seem to be getting initialized? Should be drilled through TaskList to Task...
        // whatever
        task.editTask({  id: task.id,
                    taskName: newName, 
                    taskDesc: (newDesc.toString().split("\n")), 
                    taskDate: newDate });
        setNewName("");
        setNewDesc("");
        setNewDate("");
    
        setEditing(false)
    }

    const handleDelete = () => {
        task.deleteTask(task.id);
    }

    if(isEditing == false){
        return(
            <div>
                <h2>{task.taskName}</h2>
                <ul> 
                    {task.taskDesc.map((t) => ( // <li key = {???}> TBC fix?
                        <li>{t}</li>
                    ))}
                </ul>
                <p> {/* TBC: Print format is different to input format | FIX*/}
                {task.taskDate}
                </p>
                <button onClick={startEdit}>EDIT</button>
                <button onClick = {handleDelete}>DELETE</button>
            </div>
        )
    }else{
        return(
            <div>
                <h3>
                        <input 
                            //id = "newTitleInput"
                            //name = "newTitleInput"
                            type = "text"

                            placeholder = {task.taskName}
                            defaultValue = {task.taskName}
                            //value = {newTitle}

                            onChange={(e) => setNewName(e.target.value)}
                        />    
                    </h3>
                    <textarea 
                        //id = "newDescriptionInput"
                        //name = "newDescriptionInput"
                        rows = {5}
                        columns = {30}

                        placeholder = {task.taskDesc.join("\n")}
                        defaultValue = {task.taskDesc.join("\n")}
                        //value = {newDescription}

                        onChange={(e) => setNewDesc(e.target.value)}
                    />
                    <p>
                        <input
                            //id = "newDueDateInput"
                            //name = "newDueDateInput"
                            type="date"

                            //placeholder = "DueDate" //{task.taskDate}
                            defaultValue = {task.taskDate/*.toISOString().substring(0,10)*/}
                            //value={task.dueDate}

                            onChange={(e) => setNewDate(e.target.value)}
                        />
                    </p>
                    
                    <button onClick={handleEdit}>SAVE EDIT</button>
                    <button onClick={() => setEditing(false)}>CANCEL</button>
            </div>
        )
    }
}
export default Task;