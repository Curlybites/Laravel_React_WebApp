import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    );
}
