import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [userID, setUserID] = useState();

// login button function
  const handleLogin = (user) => {
    Axios.post("http://localhost:3001/login", {
      username: user.username,
      password: user.password
    }).then((userID) => {
        setUserID(userID);
    });
  };
}return (
     <div>
       <DashBoard />
       <h1>TaskMaster</h1>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleCreateAccount}>Create Account</button>
     </div>
   );
export default Login