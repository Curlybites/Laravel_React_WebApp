import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaGripVertical } from "react-icons/fa";
import AdminNavbar from "./AdminNavbar";
import ThemeChanger from "../../components/ThemeChanger";
import Navlinks from "./Navlinks";

export default function AdminSidebar() {
    const location = useLocation;

    const isActive = location.pathname === "/Admin/Dashboard";

    return (
            <div className="h-screen w-80 border-r relative">
                <div className="logo text-2xl font-bold flex items-center justify-center pt-4 border-b pb-4 sticky top-0 left-0 bg-base-100 z-20">
                    <FaPenNib />
                    <span>Blogg.</span>
                </div>

                <ul className="menu text-base-content min-h-full ">
                    {Navlinks.map((navlink, index) => (
                        <li key={index}>
                            <Link
                                to={navlink.url}
                                className="flex items-center justify-start hover:bg-slate-100 rounded-md p-2 pl-4 "
                            >
                                <span className="text-xl ">
                                    {navlink.icon}
                                </span>
                                <span className=" text-sm pt-1 ml-2.5">
                                    {navlink.navLinkname}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    );
}
