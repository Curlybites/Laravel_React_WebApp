import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminPage from "./views/Admin/AdminPage";
import router from './Router'
import { RouterProvider } from "react-router-dom";

export default function app() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Homepage />} />
        //         <Route path="/Login" element={<Login />} />
        //         <Route path="/Register" element={<Register/>} />
        //         <Route path="/Admin" element={<AdminPage/>} />
        //     </Routes>
        // </BrowserRouter>
       <RouterProvider router={router}/>

    );
}
