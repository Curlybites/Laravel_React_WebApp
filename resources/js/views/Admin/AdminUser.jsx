import React, { useEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";
import ArticleTable from "./components/ArticleTable";
import { themeChange } from "theme-change";

export default function AdminCategory() {
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
                                    User
                                </h>
                            </div>
                            <div className="flex-none">
                                <button className="btn btn-outline btn-info btn-sm mx-3 ">
                                    <h1 className="text-sm  font-normal">
                                        Add User
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ArticleTable />
                </div>
            </div>
        </div>
    );
}
