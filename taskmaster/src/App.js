import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [complete] = useState(0);
    const markComplete = () => {
        complete = true;
    };

    const markIncomplete = () => {
        complete = false;
    };

    return (
        <div>
            <h1>TaskMaster</h1>
        </div>
    );
}

export default App;
