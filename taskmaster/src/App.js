import logo from './logo.svg';
import './App.css';
import Task from './Task.js';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {

    setCount(count + 1);

  };

  const handleDecrement = () => {

    setCount(count - 1);

  };


  return (

    <div>

        <h1>My React App</h1>

        <p>Count: {count}</p>

        <button onClick={handleIncrement}>Increment</button>

        <button onClick={handleDecrement}>Decrement</button>

        <Task taskName = 'Code' taskDesc = {["JavaScript","Html"]} taskDate = {new Date("2023-09-23T03:24:00")} />

    </div>

  );
}

export default App;
