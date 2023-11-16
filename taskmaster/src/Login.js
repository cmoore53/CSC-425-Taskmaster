import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DashBoard from './DashBoard';

const Login = () => {

    /*const user = {
        username: "",
        password: "",
        userID: -1
    };
    const [userID, setUserID] = useState(user.userID);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);*/
    const [user, setUser] = useState({userID: -1, username: "", password: ""})

// login button function
  const handleLogin = () => {
    console.log("login:")
    console.log(user)
    console.log(user.username)
    console.log(user.password)
    Axios.post("http://localhost:3001/login", {
        user: user
      //username: user.username,
      //password: user.password
    }).then((response) => {
        console.log("Login 28")
        console.log(user)
        console.log("Login 30")
        console.log(response)
        setUser({userID: response.data[0].userID, username: user.username, password: user.password});
    });
  };

  // create account button function
    const handleCreateAccount = () => {
      Axios.post("http://localhost:3001/createAccount", {
        username: user.username,
        password: user.password
      }).then(() => {
          handleLogin()
      });
    };
return (
     <div>
        <DashBoard />
        <h1>TaskMaster</h1>
        <h2>{user.username}</h2>
        <h2>{user.password}</h2>
        <h2>{user.userID}</h2>

        <div>
        <input
        type="text"
        placeholder="Username"
        value={user.username}

        onChange={(e) => setUser({userID: user.userID, username: e.target.value, password: user.password})}
        />
        <input
        type="text"
        placeholder="Password"
        value={user.password}

        onChange={(e) => setUser({userID: user.userID, username: user.username, password: e.target.value})}
        />
        </div>
        {console.log(user)}
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleCreateAccount}>Create Account</button>
     </div>
   );
};
export default Login