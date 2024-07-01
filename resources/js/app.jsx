import React from "react";
import router from "./Router";
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
        <RouterProvider router={router} />
    );
}
