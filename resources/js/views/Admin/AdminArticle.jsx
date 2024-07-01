import React from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";
import ArticleTable from "./components/ArticleTable";

export default function AdminArticle() {
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
                                    Article
                                </h>
                            </div>
                            <div className="flex-none">
                                <button className="btn btn-outline btn-info btn-sm mx-3 ">
                                    <h1 className="text-sm  font-normal">
                                        Add Article
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
