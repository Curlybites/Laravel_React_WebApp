import React from "react";

import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
    return (
        <div className="navbar border-b-2 bg-base-100">
            <div className="flex-1 items-center justify-start">
                <Link
                    to={"/"}
                    className="flex items-center justify-center p-4 text-xl ml-9 relative font-bold"
                >
                    <FaPenNib className="absolute left-0 " />
                    <span className="pl-1">Blogg.</span>
                </Link>

                <ul className="flex items-center justify-start">
                    <li>
                        <Link className="text-sm ml-5 ">Category</Link>
                    </li>
                    <li>
                        <Link className="text-sm ml-5">Article</Link>
                    </li>
                    <li>
                        <Link className="text-sm ml-5">Latest</Link>
                    </li>
                </ul>
            </div>

            <div className="flex-none">
                <label className="input input-sm input-bordered flex items-center gap-2 rounded-full mr-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input type="text" className="grow " placeholder="Search" />
                </label >
                <ThemeChanger />

                <Link to={"/Login"} className="mr-9 ml-5 text-sm">
                    Sign In
                </Link>
            </div>
        </div>
    );
}
