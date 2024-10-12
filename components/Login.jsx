'use client'
import React, { useState } from "react";
import "./login.css";

const storedUsername = "q";
const storedPassword = "q";

const Login = ({ setLoginStatus }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value); 
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value); 
    };

    const handleSubmit = (e) => {
      
        if (username === storedUsername && password === storedPassword) {
            // window.localStorage.reload();
            setLoginStatus(1); 
        } else {
            alert("Invalid username or password");
            // window.localStorage.reload()
            setLoginStatus(0); 
        }
    };

    return (
        <div className="login">
            <div className="login-text">Login</div>
            <div className="login-wrap">
                <div className="username-wrap">
                    <div className="username-text">User Name</div>
                    <div className="username-input">
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                            className="input-field"
                        />
                    </div>
                </div>
                
                <div className="password-wrap">
                    <div className="password-text">Password</div>
                    <div className="password-input">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                            className="input-field"
                        />
                    </div>
                </div>

                <div className="submit-btn">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
