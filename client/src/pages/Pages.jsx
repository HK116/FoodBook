import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

function Pages() {
    const user = null;
  return (
    <div>
        <Routes>
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
            <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup />} />
        </Routes>
    </div>
  )
}

export default Pages