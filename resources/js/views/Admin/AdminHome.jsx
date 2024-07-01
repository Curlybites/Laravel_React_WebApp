import React, { useEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import { themeChange } from "theme-change";
import AdminNavbar from "./components/AdminNavbar";
export default function AdminPage() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);
    
    return (
        <div className="flex">
        <AdminSidebar />
        <div className="w-full">
            <AdminNavbar />
            <div className="content">
                <h1 className="text-xl font-bold m-5">Home</h1>
                
            </div>
        </div>
    </div>
    );
}
