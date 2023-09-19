import './App.css';

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

      <h1>TaskMaster</h1>

    </div>

  );
}

export default App;
