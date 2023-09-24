
//import React, { useState } from 'react';

/*  function EditButton(){}
    Create Edit Button in Dashboard or Task?
    return(
        <div>
            <button onClick = {() => editTask( STUFF??? )}>EDIT</button>
        </div>
    )
*/
// Need Edit Btn in task(?) object to pass new data: Complete overwrite
function editTask(id, newTitle, newDescription, newDueDate){
    
    // === is strict equality [no type conversion]
    if(id === task.id){
        return {...task, title : newTitle, Description : newDescription, dueDate : newDueDate};
    }
    return task;
}

/*
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      //
      return { ...task, name: newName };
    }
    return task;
  });
  setTasks(editedTaskList);
}
*/