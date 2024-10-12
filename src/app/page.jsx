'use client'
import React, { useState } from "react";
import './page.css';
import Login from '../../components/Login.jsx';

import Main from '../../components/Main.jsx';

const Page = () => {
    const [loginStatus, setLoginStatus] = useState(0); // 0 means not logged in

    return (
        <div className="page">
            {loginStatus === 1 ? (
                <div className="MainPage">
                    <Main />
                </div>
            ) : (
                <Login setLoginStatus={setLoginStatus} />
            )}
        </div>
    );
}

export default Page;
