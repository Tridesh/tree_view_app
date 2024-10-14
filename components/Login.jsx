'use client'
import React, { useState } from "react";
import "./login.css"; 

const storedUsername = "q";   
const storedPassword = "q";

const LoginForm = ({ setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === storedUsername && password === storedPassword) {
      setLoginStatus(1);
    } else {
      alert("Invalid username or password");
      setLoginStatus(0); 
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <h2>Sign In</h2>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span>Enter Password</span>
          <i></i>
        </div>
        <input type="submit" value="Login" />
        <div className="links">
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
