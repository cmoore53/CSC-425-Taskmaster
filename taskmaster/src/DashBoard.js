import React from 'react';
function DashBoard(){
    //This is the CSS for the title.
    const titlestyle = {
        color: "white",
        backgroundColor: "#11ab8f",
        padding: "15px",
        fontFamily: "Arial",
        fontSize:"40px"
    }
    return(
        <div>
            <header style={titlestyle}>Task Master</header>
        </div>

    )
}

export default DashBoard;