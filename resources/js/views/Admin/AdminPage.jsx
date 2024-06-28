import React, { useEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import { themeChange } from "theme-change";
export default function AdminPage() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);
    
    return (
        <div>
            <AdminSidebar />
        </div>
    );
}
