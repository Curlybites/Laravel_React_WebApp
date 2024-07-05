import React from "react";

export default function ArticleTable() {
    return (
        <div className="table">
            <div className="overflow-x-auto mx-5 p-3 rounded-lg border ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <label>1</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Natoy
                                        </div>
                                        <div className="text-sm opacity-50">
                                            Russia
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h1 className="font-bold">
                                    Today My life begins
                                </h1>
                                <h1 className="text-sm opacity-50">category</h1>
                            </td>
                            <td>
                                <div className="flex gap-2">
                                    <button className="text-info ">edit</button>
                                    <button className="text-error">
                                        delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* row 4 */}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Number</th>
                            <th>Author</th>
                            <th>Title</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
