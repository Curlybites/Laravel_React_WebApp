import React from "react";
import { FaPenNib } from "react-icons/fa";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Register() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <Link
                to={"/"}
                className="absolute top-0 left-0 btn btn-ghost rounded-full m-2"
            >
                <FaArrowLeft />
            </Link>
            <div className="content flex flex-col gap-10 mb-20 ">
                <div className="logo flex items-center justify-center text-4xl">
                    <FaPenNib />
                    <span className="font-bold">Blogg.</span>
                </div>

                <button className="border-2 border-current rounded-lg p-2">
                    Sign up with Google
                </button>

                <div className="divider">or</div>

                <form action="" className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        className="input input-bordered w-full max-w-xs "
                    />
                    <input
                        type="Email"
                        placeholder="Email"
                        required
                        className="input input-bordered w-full max-w-xs "
                    />
                    <input
                        type="Password"
                        placeholder="Password"
                        required
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="Password"
                        placeholder="Confirm Password"
                        required
                        className="input input-bordered w-full max-w-xs"
                    />

                    <button className="btn btn-primary text-white">
                        Register
                    </button>
                </form>

                <Link to={"/Login"} className="text-center text-sm">
                    Already have an account?{" "}
                    <span className="text-blue-500">Sign In</span>
                </Link>
            </div>
        </div>
    );
}
