import React from "react";

import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar border-b-2 bg-base-100">
            <div className="flex-1 items-center justify-start">
                <a className="btn btn-ghost text-xl ml-9 relative font-bold">
                    <FaPenNib className="absolute left-0 " />
                    <span className="pl-1">Blogg.</span>
                </a>

                <ul className="flex items-center justify-start">
                    <li>
                        <Link className="text-sm ">Category</Link>
                    </li>
                    <li>
                        <Link className="text-sm ml-2">Article</Link>
                    </li>
                    <li>
                        <Link className="text-sm ml-2">Latest</Link>
                    </li>
                </ul>
            </div>

            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}
