import React from 'react';
function DashBoard(){
    //This is the CSS for the title.
    const titlestyle = {
        color: "white",
        backgroundColor: "Purple",
        padding: "10px",
        fontFamily: "Arial",
        fontSize:"40px"
    }
    return(
        <div>
            <header style={titlestyle}>Task Manager</header>
        </div>

    )
}

export default DashBoard;