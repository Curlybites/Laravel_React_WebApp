import { useEffect } from "react";
import { themeChange } from "theme-change";
import Themes from "./arrayObject/Themes";

export default function ThemeChanger() {
    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);
    return (
        <div className=" ">
            <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost m-1 font-normal text-sm">
                    Theme
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <select
                        data-choose-theme
                        className="select select-sm w-full max-w-xs "
                    >
                        {Themes.map((theme, index) => (
                            <option value={theme.color} key={index}>
                                {theme.name}
                            </option>
                        ))}
                    </select>
                </ul>
            </details>
        </div>
    );
}
