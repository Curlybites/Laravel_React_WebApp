import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Login from "./views/Login";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
