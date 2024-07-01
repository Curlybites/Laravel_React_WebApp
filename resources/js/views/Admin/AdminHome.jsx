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
                    <div className="header m-5">
                        <div className="navbar bg-base-100  border rounded-lg">
                            <div className="flex-1">
                                <h className="mx-4 font-bold text-xl ">
                                  Home
                                </h>
                            </div>
                            <div className="flex-none">
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
    );
}
