import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import DashBoard from './DashBoard';
import App from './App';

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
    const [errorMsg, setErrorMsg] = useState("")

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
        if(response.data[0] == null)
            setErrorMsg("Your username or password is incorrect.");
        else if(response.data[0].userID != null){
            setUser({userID: response.data[0].userID, username: user.username, password: user.password});
            setErrorMsg("");
        }
        else
            setErrorMsg("An unexpected error has occurred!");
    });
  };

  // create account button function
    const handleCheckAccount = () => {
      Axios.post("http://localhost:3001/checkAccount", {
      user: user
      }).then((response) => {
        console.log("response")
        console.log(response)
        console.log(response.data)
        console.log(response.data[0])
        if(response.data[0] == null){
            console.log("null")
            handleCreateAccount()
            handleLogin()
        }else
            setErrorMsg("Username already exists")
      });
    };

    // create account button helper function
    const handleCreateAccount = () => {
      Axios.post("http://localhost:3001/createAccount", {
      user: user
      }).then((response) => {
      console.log("Account Create Response: ");
      console.log(response);
      });
    };
if(user.userID == -1 && user.userID != null){
    return (
         <div>
            <DashBoard />
            <h1>TaskMaster</h1>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
            <h2>{user.userID}</h2>
            <h4>{errorMsg}</h4>

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
            {console.log("Login72")}
            {console.log(user)}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCheckAccount}>Create Account</button>
         </div>
       );
}else{
return(
    <App />
    )
}
};
export default Login