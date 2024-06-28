import React from "react";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaGripVertical } from "react-icons/fa";
import AdminNavbar from "./AdminNavbar";
import ThemeChanger from "../../components/ThemeChanger";
import { FaPalette } from "react-icons/fa";

export default function AdminSidebar() {
    return (
        <div className="flex ">
            <div className="h-screen w-80 border-r">
                <div className="logo text-2xl font-bold flex items-center justify-center pt-4 border-b pb-4">
                    <FaPenNib />
                    <span>Blogg.</span>
                </div>

                <ul className="m-4">
                    <li>
                        <Link className="flex items-center justify-start hover:bg-slate-100 rounded-md p-2 pl-4  active">
                            <MdHomeFilled className="text-xl  fixed" />
                            <span className=" text-sm pt-1 ml-9">
                                Dashboard
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link className="flex items-center justify-start hover:bg-slate-100 rounded-md  p-2 pl-4">
                            <FaGripVertical className="text-xl mr-3 " />
                            <span className="text-sm pt-1">Category</span>
                        </Link>
                    </li>
                    
                

                    {/* <li className="flex items-center justify-start hover:bg-slate-200 rounded-md  p-2 pl-4">
                        <FaPalette className="text-xl mr-3 " />
                        
                    </li> */}
                </ul>
            </div>
            <AdminNavbar />
        </div>
    );
}
