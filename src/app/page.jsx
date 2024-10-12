'use client';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './page.css';
import Login from '../../components/Login.jsx';
import Main from '../../components/Main.jsx';
import Item from '../../item-page/item.jsx'; // Import Item component

const Page = () => {
    const [loginStatus, setLoginStatus] = useState(0);

    return (
        <Router>
            <div className="page">
                {loginStatus === 1 ? (
                    <Routes>
                        <Route path="/" element={<Main />} /> {/* Main component is now the default route */}
                        <Route path="/item/:itemId" element={<Item />} /> {/* Route to Item component */}
                    </Routes>
                ) : (
                    <Login setLoginStatus={setLoginStatus} />
                )}
            </div>
        </Router>
    );
}

export default Page;
