
import React, { useState } from 'react';

/*  function EditButton(){}
    Create Edit Button in Dashboard or Task?
    return(
        <div>
            <button onClick = {() => editTask( STUFF??? )}>EDIT</button>
        </div>
    )
*/
function editTask(id, newTitle, newDescription, newDueDate){
    
    // === is strict equality [no type conversion]
    if(id === task.id){
        return {...task, title : newTitle};
    }
    return task;
}