import React from "react";
import ThemeChanger from "../../components/ThemeChanger";
import { FaBars } from "react-icons/fa6";

export default function AdminNavbar() {
    return (
   
            <div className="navbar bg-base-100 border-b sticky top-0 left-0 ">
                <div className="flex-1">
                    <button className="btn btn-ghost text-xl">
                        <FaBars />
                    </button>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <h1 className=" text-sm">
                            Hello,{" "}
                            <span className="font-bold">Anthony Esquilona</span>
                        </h1>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>

                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    );
}
