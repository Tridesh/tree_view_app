// LoginForm.js
'use client'
import React, { useState } from "react";
import "./login.css"; // Importing the CSS

const storedUsername = "q";   // Stored credentials for validation
const storedPassword = "q";

const LoginForm = ({ setLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle username input change
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === storedUsername && password === storedPassword) {
      setLoginStatus(1);  // Login successful
    } else {
      alert("Invalid username or password");
      setLoginStatus(0);  // Login failed
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
