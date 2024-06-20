import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
}
